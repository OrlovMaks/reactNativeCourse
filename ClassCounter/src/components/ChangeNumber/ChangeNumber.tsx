import React from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import { ButtonCount } from '../Button/Button';
import { ButtonReset } from '../ButtonReset/ButtonReset';
import { InputStep } from '../InputStep';
import { style } from './style';
import { Message } from '../Message';

export class ChangeNumber extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0,
            inputValue: 1
        };
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (+this.state.counter % 5 === 0 && this.state.inputValue === prevState.inputValue) {
            if (this.state.counter > prevState.counter) {
                this.setState({ inputValue: this.state.inputValue + 1 });
            }
            else if (this.state.counter < prevState.counter) {
                if (this.state.inputValue > 1) {
                    this.setState({ inputValue: this.state.inputValue - 1 });
                }
            }
        }
    }

    onChangeInputValue = (text: string) => {
        this.setState({ inputValue: Number(text) });
    }

    increment = () => this.setState({ counter: this.state.counter + this.state.inputValue })

    decrement = () => this.setState({ counter: this.state.counter - this.state.inputValue })

    reset = () => { this.setState({ counter: 0, inputValue: 1 }) }

    render() {
        return (
            <View style={style.wrapper}>
                <Text style={style.text}>{this.state.counter}</Text>
                {!this.state.inputValue && <Message value={this.onChangeInputValue}/>}
                <InputStep value={this.state.inputValue} onChangeText={this.onChangeInputValue} />
                <View style={style.wrapperButtons}>
                    <ButtonCount title={'–'} currentFunc={this.decrement} />
                    <ButtonCount title={'+'} currentFunc={this.increment} />
                </View>
                <ButtonReset title={'Reset'} currentFunc={this.reset} />
            </View>
        )
    }
}