import React, { useState } from 'react';
import CardList from '../../components/CardList';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import { useProducts } from '../../contexts/ProductsProvider';
import { Button, Container, TopSection } from './styles';

function Home(): JSX.Element {
  const { isLoading, createProduct } = useProducts();
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <Container>
      {isModalVisible && (
        <Modal
          onClose={handleCloseModal}
          title="Adicione o seu produto"
          labelAction="Adicionar"
          action={createProduct}
        />
      )}
      <Loading isLoading={isLoading} />
      <TopSection>
        <Search />
        <Button type="button" onClick={() => setIsModalVisible(true)}>
          <span>+</span> Adicionar
        </Button>
      </TopSection>
      <CardList />
    </Container>
  );
}

export default Home;
