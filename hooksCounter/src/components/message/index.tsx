import React, { useRef, useState, useEffect, FC } from 'react';
import { Text,View } from 'react-native';
import { style } from './styles';
const WRONG_MESSAGE_TIMER = 1000

interface IProps{
    value: (plusValue: number)=> void
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
            }), WRONG_MESSAGE_TIMER); 
        return () => clearInterval(timerVal.current); 
    }, []);

    return (
        <View>
            <Text style={style.text}>Please write correct step {time}</Text>
        </View>
    )
}