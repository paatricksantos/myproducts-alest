import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Overlay, Container, Footer, InputField, InputFile } from './styles';

interface IProduct {
  id: string;
  name: string;
  price: string | number;
  img: {
    url: string;
    title: string;
  };
}

interface IModal {
  onClose: () => void;
  title: string;
  labelAction: string;
  editProduct?: IProduct;
  action: ({ id, formData }: { id?: string; formData: FormData }) => void;
}

type photoProductProps = {
  file: File;
  url: string;
};

function Modal({
  onClose,
  title,
  labelAction,
  editProduct,
  action,
}: IModal): JSX.Element {
  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState<string | number>('');
  const [photoProduct, setPhotoProduct] = useState<photoProductProps>(
    {} as photoProductProps,
  );

  const isFormValid = !photoProduct.file || !priceProduct || !nameProduct;

  useEffect(() => {
    if (editProduct) {
      setNameProduct(editProduct.name);
      setPriceProduct(editProduct.price);
    }

    return () => {
      setNameProduct('');
      setPriceProduct('');
      setPhotoProduct({} as photoProductProps);
    };
  }, [editProduct]);

  async function handleAction(event: FormEvent) {
    event.preventDefault();

    if (!photoProduct.file || !priceProduct || !nameProduct) {
      alert('deu bo');
      return;
    }

    const formData = new FormData();
    formData.append('photo', photoProduct.file);
    formData.append('name', nameProduct);
    formData.append('price', priceProduct.toString());

    if (editProduct?.id) {
      action({ id: editProduct.id, formData });
    } else {
      action({ formData });
    }
    onClose();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.length ? event.target.files[0] : false;
    if (file) {
      const photoURL = URL.createObjectURL(file);

      setPhotoProduct({ file, url: photoURL });
    }
  }

  function handleClose(event: MouseEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;

    onClose();
  }

  return ReactDOM.createPortal(
    <Overlay onClick={handleClose}>
      <Container onSubmit={handleAction}>
        <h1>{title}</h1>
        <div>
          <InputFile>
            {photoProduct.url ? (
              <img src={photoProduct.url} alt="produto" />
            ) : (
              'Selecionar'
            )}
            <input type="file" onChange={handleChange} />
          </InputFile>
          <InputField>
            Nome do Produto
            <input
              type="text"
              value={nameProduct}
              onChange={e => setNameProduct(e.target.value)}
            />
          </InputField>
          <InputField>
            Valor do Produto
            <div className="input-price">
              <span>R$</span>
              <input
                type="text"
                value={priceProduct}
                onChange={e => setPriceProduct(e.target.value)}
              />
            </div>
          </InputField>
        </div>
        <Footer>
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" disabled={isFormValid}>
            {labelAction}
          </button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('portal-root') || document.body,
  );
}

export default Modal;
