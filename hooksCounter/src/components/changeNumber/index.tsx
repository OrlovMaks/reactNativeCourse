import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCount } from '../buttonsIncrementDecrement/index';
import { ButtonReset } from '../buttonReset/index';
import { InputStep } from '../inputStep/index';
import { style } from './styles';
import { Message } from '../message/index';

export const ChangeNumber = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState<number>(1)
    const prevCounter = useRef(0);

    useEffect(() => {
        if (counter % 5 === 0) {
            if (counter > prevCounter.current ) {
                prevCounter.current = counter;
                setInputValue(inputValue + 1);
            } else if (counter < prevCounter.current && inputValue > 1) {
                prevCounter.current = counter;
                setInputValue(inputValue - 1);
            }
        } else if (prevCounter.current % 5 === 0 && counter < prevCounter.current && inputValue > 1) {
            setInputValue(inputValue - 1);
        }
    }, [counter])

    const onChangeInputValue = (text: string) => {
        setInputValue(Number(text));
    }

    const increment = () => {
        prevCounter.current = counter;
        setCounter(counter + inputValue);
    };

    const decrement = () => {
        prevCounter.current = counter;
        setCounter(counter - inputValue);
    };

    const reset = () => { 
        setCounter(0);
        setInputValue(1);
        prevCounter.current = 0; };

    return (
        <View style={style.wrapper}>
            <Text style={style.text}>{counter}</Text>
            {!inputValue && <Message value={setInputValue} />}
            <InputStep value={inputValue} onChangeText={onChangeInputValue} />
            <View style={style.wrapperButtons}>
                <ButtonCount title={'–'} currentFunc={decrement} />
                <ButtonCount title={'+'} currentFunc={increment} />
            </View>
            <ButtonReset title={'Reset'} currentFunc={reset} />
        </View>
    )
}