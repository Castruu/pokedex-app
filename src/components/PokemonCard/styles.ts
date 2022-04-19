import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 50%;
    margin-right: 10px;
    margin-bottom: 8px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 5px;
`

export const PokemonImage = styled.Image`
    height: ${RFValue(50)}px;
    aspect-ratio: 1;
`
export const PokemonId = styled.Text`
    font-size: ${RFValue(8)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
`
export const Name = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text_dark};
    text-transform: capitalize;

`