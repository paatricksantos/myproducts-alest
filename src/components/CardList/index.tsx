import React from 'react';
import { Container } from './styles';
import Card from './Card';
import { useProducts } from '../../contexts/ProductsProvider';

function CardList(): JSX.Element {
  const { filteredProducts } = useProducts();

  return (
    <Container>
      {filteredProducts.length === 0 ? (
        <p>Nenhum produto...</p>
      ) : (
        filteredProducts.map(item => (
          <Card
            id={item.id}
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))
      )}
    </Container>
  );
}

export default CardList;
