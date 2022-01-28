import React from 'react';
import { TextInput } from 'react-native';

import { style } from './styles';

interface IInputStep {
    onChangeText: (text: string) => void;
    value: string | number;
}

export class InputStep extends React.Component {
    constructor(props: IInputStep) {
        super(props);
    }

    

    render() {
        return (<TextInput
            style={style.input}
            onChangeText={this.props.onChangeText}
            value={String(this.props.value) }
            keyboardType="numeric"
        />
        )
    }
}