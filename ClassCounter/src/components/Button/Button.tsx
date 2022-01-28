import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { buttonStyles } from './button.style';

export const ButtonCount = (props: any) => {
    return (
        <TouchableOpacity onPress={props.currentFunc}>
            <View style={buttonStyles.button}>
                <Text style={buttonStyles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}