import React, { FC } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { buttonStyles } from './styles';

interface IProps {
    currentFunc: () => void,
    title: string,
}


export const ButtonCount: FC<IProps> = ({ currentFunc, title }) => {
    return (
        <TouchableOpacity onPress={currentFunc}>
            <View style={buttonStyles.button}>
                <Text style={buttonStyles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}