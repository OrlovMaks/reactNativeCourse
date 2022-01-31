import React, { useRef, useState, useEffect, FC } from 'react';
import { Text,View } from 'react-native';
import { style } from './styles';

interface IProps{
    value: number | string
}

export const Message:FC<IProps> = ({value}) => {
    const [time, setTime] = useState(10)
    const timerVal = useRef<number>(10)
    useEffect(() => { 
        timerVal.current = setInterval(() => 
            setTime((prevTime) => { 
                if (prevTime === 0) { 
                    value(1); 
                } 
                return prevTime - 1; 
            }), 1000); 
        return () => clearInterval(timerVal.current); 
    }, []);

    return (
        <View>
            <Text style={style.text}>Please write correct step {time}</Text>
        </View>
    )
}