import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Pokemon from '../../components/Pokemon';
import { PokemonData } from '../../interface/pokemon.interface';

export default function Main() {
  const [pokeData, setPokeData] = useState<PokemonData[]>([]);

  const getPokemonData = async () => {
    axios
      .get('/data/pokemon.json')
      .then(res => {
        setPokeData(res.data.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <Wrapper>
      <Sect>
        <PokeUl>
          {pokeData.map((data: PokemonData) => {
            return <Pokemon key={data.id} pokeData={data} />;
          })}
        </PokeUl>
      </Sect>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Sect = styled.section`
  padding: 0 45px;
  margin: 45px 0 190px;
  position: relative;
  text-align: center;
`;

const PokeUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  clear: both;
`;
