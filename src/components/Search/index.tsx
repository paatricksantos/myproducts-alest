import React from 'react';

import { MdSearch } from 'react-icons/md';

import { useProducts } from '../../contexts/ProductsProvider';

import { Container } from './styles';

function Search(): JSX.Element {
  const { searchTerm, handleChangeSearchTerm } = useProducts();
  return (
    <Container>
      <MdSearch size={24} />
      <input
        type="search"
        value={searchTerm}
        onChange={handleChangeSearchTerm}
        placeholder="Pesquisar pelo nome..."
      />
    </Container>
  );
}

export default Search;
