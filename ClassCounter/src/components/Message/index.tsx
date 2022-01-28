import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { style } from './styles';

export class Message extends React.Component {
    constructor(props: number) {
        super(props);
        this.state = {
            time: 10
        };
        this.timerVal = React.createRef()
    }
    componentDidMount = () => {
        this.timerVal.current = setInterval(() => this.setState((prevState) => {
            if (prevState.time === 0) {
                return this.props.value()
            } else {
                return { time: prevState.time - 1 }
            }

        }), 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.timerVal.current)
    }

    render() {
        return (
            <View>
                <Text style={{ color: 'white', fontSize: 20 }}>time{this.state.time}</Text>
            </View>
        )
    }
}