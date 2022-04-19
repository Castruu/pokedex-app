import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FlatList, FlatListProps } from 'react-native';
import styled from "styled-components/native"
import typecolor from '../../utils/typecolor';

interface PokemonDataProps {
    id: string;
    name: string;
    url: string;
    image: string;
}

interface TypeProps {
    type: string;
}

export const Container = styled.View`
    width: 100%;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    `;

export const Header = styled.View`
    align-items: center;
    justify-content: flex-end;
    height: ${RFPercentage(15)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(18)}px;
    margin-bottom: 18px;
`

export const PokemonList = styled(
    FlatList as new (props: FlatListProps<PokemonDataProps>) => FlatList<PokemonDataProps>
).attrs({ showsVerticalScrollIndicator: false })`
    flex: 1;
    width: 100%;
    padding: 24px;
`

export const ModalContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;

`

export const ModalContent = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 50px;
    border-radius: 5px;

`

export const PokemonImage = styled.Image`        
    height: 200px;
    aspect-ratio: 1;
`
export const ModalTitle = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ModalName = styled.Text`
    margin-right: 10px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(18)}px;
`
export const ModalId = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(12)}px;
`

export const Types = styled.View`
    margin-bottom: 10px;
    flex-direction: row;
`

export const Type = styled.Text<TypeProps>`
    background-color: ${({type}) => typecolor[type]};
    padding: 5px;
    border-radius: 5px;
    margin: 0 3px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
`

export const PokemonHeight = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`
export const PokemonWeight = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`
export const CloseModal = styled.TouchableOpacity`
    margin-top: 50px;
    width: 200px;
    padding: 18px 0;
    align-items: center;
    justify-content: center;
    background-color: orange;
`