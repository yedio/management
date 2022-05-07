import React from 'react';
import styled from 'styled-components';
import { PokemonData } from '../interface/pokemon.interface';

interface Props {
  pokeData: PokemonData;
}

export default function Pokemon({ pokeData }: Props) {
  return (
    <Wrapper>
      <div>{pokeData.id}</div>
      <div>{pokeData.name}</div>
      <div>
        <img src={pokeData.image} alt={pokeData.name} />
      </div>
      <div>{pokeData.description}</div>
      <div>타입: {pokeData.type}</div>
      <div>분류: {pokeData.division}</div>
      <div>키: {pokeData.height}</div>
      <div>몸무게: {pokeData.weight}</div>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  padding-left: 10px;
  padding-right: 10px;
  margin: 40px 0;
  img {
    width: 200px;
  }
`;
