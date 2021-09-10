import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  ChangeEvent,
  createContext,
  useContext,
} from 'react';
import ProductsService from '../../services/ProductsService';

interface IProduct {
  id: string;
  name: string;
  price: string | number;
  img: {
    url: string;
    title: string;
  };
}

interface IProductsContext {
  products: IProduct[];
  filteredProducts: IProduct[];
  searchTerm: string;
  isLoading: boolean;
  handleChangeSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteProduct: (id: string) => Promise<void>;
  createProduct: ({ formData }: { formData: FormData }) => Promise<void>;
  updateProduct: ({
    id,
    formData,
  }: {
    id?: string;
    formData: FormData;
  }) => Promise<void>;
}

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext,
);

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getAll = useCallback(async () => {
    try {
      setIsLoading(true);
      const productsList = await ProductsService.listProducts();
      setProducts(productsList);
    } catch (erro) {
      console.log(erro);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [products, searchTerm],
  );

  useEffect(() => {
    getAll();
  }, [getAll]);

  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  async function updateProduct({
    id,
    formData,
  }: {
    id?: string;
    formData: FormData;
  }) {
    try {
      setIsLoading(true);
      if (!id) return;
      await ProductsService.updateProduct(id, formData);
      await getAll();
    } catch (erro) {
      console.log(erro);
    } finally {
      setIsLoading(false);
    }
  }

  async function createProduct({ formData }: { formData: FormData }) {
    try {
      setIsLoading(true);

      await fetch(`http://localhost:3333/products`, {
        method: 'POST',
        body: formData,
      });
      await getAll();
    } catch (erro) {
      console.log(erro);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteProduct(id: string) {
    try {
      setIsLoading(true);
      await ProductsService.deleteProduct(id);
      await getAll();
    } catch (erro) {
      console.log(erro);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        searchTerm,
        isLoading,
        handleChangeSearchTerm,
        filteredProducts,
        deleteProduct,
        createProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): IProductsContext => {
  const context = useContext(ProductsContext);

  return context;
};
