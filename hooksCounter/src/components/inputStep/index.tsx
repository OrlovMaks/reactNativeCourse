import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { style } from './styles';

interface IProps{
    value:string | number,
    onChangeText:(text: string)=>void
}

export const InputStep:FC<IProps> = (props)=>{
    return(
        <TextInput
            style={style.input}
            onChangeText={props.onChangeText}
            value={String(props.value) }
            keyboardType="numeric"
        />
    )
}