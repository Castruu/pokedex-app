import React from 'react';
import { View, Text, Image, TouchableOpacityProps } from 'react-native';

import {
    Container,
    PokemonImage,
    PokemonId,
    Name,
} from './styles';

interface DataProps {
    id: string;
    name: string;
    url: string;
    image: string;
}

interface Props extends TouchableOpacityProps {
    pokemon: DataProps
}

const PokemonCard = ({ pokemon, ...rest }: Props) => {
    return <Container {...rest} activeOpacity={.5}>
        <PokemonImage source={{ uri: pokemon.image }} />
        <PokemonId>{pokemon.id}</PokemonId>
        <Name>{pokemon.name}</Name>
    </Container>;
}

export default PokemonCard;