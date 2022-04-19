import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';
import PokemonCard from '../../components/PokemonCard';

import {
  Container,
  Header,
  Title,
  PokemonList,
  ModalContainer,
  PokemonImage,
  ModalTitle,
  ModalName,
  ModalId,
  PokemonHeight,
  PokemonWeight,
  Types,
  Type,
  CloseModal,
  ModalContent,
} from './styles';


interface PokemonProps {
  id: string;
  name: string;
  url: string;
  image: string;
}

interface PokemonModalProps extends PokemonProps {
  types: string[];
  weight: number;
  height: number;
}

type PokemonDataProps = PokemonProps[]

const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const requestUri = 'https://pokeapi.co/api/v2/';

const Home = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDataProps>([])
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonModalProps>({} as PokemonModalProps)
  const theme = useTheme()

  async function handleSelectPokemon(pokemon: PokemonProps) {
    const request = await fetch(requestUri + `pokemon/${pokemon.id}`)
    const data = await request.json()
    const savedPokemon = {
      ...pokemon,
      types: data.types.map((it: any) => it.type.name),
      weight: Number(data.weight),
      height: Number(data.height)
    }
    console.log(savedPokemon)
    setSelectedPokemon(savedPokemon)
  }

  async function loadPokemons() {
    const request = await fetch(requestUri + 'pokemon?limit=898&offset=0')
    const data = await request.json() || []
    const pokemonData = data.results
    console.log(pokemonData)
    const formattedData = pokemonData.map((item: PokemonProps, index: number) => {
      return {
        id: index + 1,
        name: item.name,
        url: item.url,
        image: imgUrl + `${index + 1}.png`
      }
    })

    console.log(formattedData)

    setPokemonList(formattedData)
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return <Container>
    <Header>
      <Title>Pokedex</Title>
    </Header>
    <PokemonList
      data={pokemonList}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <PokemonCard pokemon={item} onPress={() => handleSelectPokemon(item)} />
      }}
    />

    {selectedPokemon.id && <Modal visible={!!selectedPokemon.id}>
      <ModalContainer>
        <ModalContent>
          <ModalTitle>
            <ModalName>
              {selectedPokemon.name}
            </ModalName>
            <ModalId>
              #{selectedPokemon.id}
            </ModalId>
          </ModalTitle>
          <PokemonImage source={{ uri: selectedPokemon.image }} />
          <Types>
            {selectedPokemon.types.map((item) =>
              <Type type={item}>{item.toUpperCase()}</Type>)
            }
          </Types>
          <PokemonHeight>Altura: {selectedPokemon.height * 10}cm</PokemonHeight>
          <PokemonWeight>Peso: {selectedPokemon.weight / 10}kg</PokemonWeight>
          <CloseModal
            onPress={() => setSelectedPokemon({} as PokemonModalProps)}
          >
            <Title>X</Title>
          </CloseModal>
        </ModalContent>
      </ModalContainer>
    </Modal>}
  </Container>;
}

export default Home;