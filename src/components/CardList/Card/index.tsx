import React, { useState } from 'react';
import { useProducts } from '../../../contexts/ProductsProvider';
import Modal from '../../Modal';
import { Actions, Container, Content, ImageContainer } from './styles';

type CardProps = {
  id: string;
  name: string;
  price: string | number;
  img: {
    url: string;
    title: string;
  };
};

function Card({ id, name, price, img }: CardProps): JSX.Element {
  const { deleteProduct, updateProduct } = useProducts();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [editProduct, setEditProduct] = useState<CardProps>({} as CardProps);

  function handleCloseModal() {
    setEditProduct({} as CardProps);
    setIsModalVisible(false);
  }

  function handleEditProduct() {
    setEditProduct({ id, name, price, img });
    setIsModalVisible(true);
  }

  function handleDeleteProduct() {
    if (window.confirm('Deseja realmente excluir o produto?')) {
      deleteProduct(id);
    }
  }

  return (
    <Container>
      {isModalVisible && (
        <Modal
          onClose={handleCloseModal}
          title="Edite seu Produto"
          labelAction="Editar"
          editProduct={editProduct}
          action={updateProduct}
        />
      )}
      <ImageContainer>
        {img.url ? <img src={img.url} alt={img.title} loading="lazy" /> : null}
      </ImageContainer>
      <Content>
        <p>{name}</p>
        <span>R$ {price}</span>
      </Content>
      <Actions>
        <button type="button" onClick={handleEditProduct}>
          Editar
        </button>
        <button type="button" onClick={handleDeleteProduct}>
          Excluir
        </button>
      </Actions>
    </Container>
  );
}

export default Card;
