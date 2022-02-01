import React, { FC } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { buttonResetStyles } from './styles';

interface IProps {
    currentFunc: () => void,
    title: string,
}

export const ButtonReset: FC<IProps> = ({ currentFunc, title }) => {
    return (
        <TouchableOpacity onPress={currentFunc}>
            <View style={buttonResetStyles.button}>
                <Text style={buttonResetStyles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}