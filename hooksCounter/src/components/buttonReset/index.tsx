import React from 'react';
import {Text,TouchableOpacity,View,} from 'react-native';
import { buttonResetStyles } from './styles';

export const ButtonReset = (props: any) => {
    return (
        <TouchableOpacity onPress={props.currentFunc}>
            <View style={buttonResetStyles.button}>
                <Text style={buttonResetStyles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}