import React, {Component} from 'react';
import {inputTypesEnum} from '../DataController/inputTypesEnum';

class InputElement extends Component{

    constructor(){
        super();
        this.inputEl   = React.createRef();
        this.hiddenTip = React.createRef();
        this.state     = {
            inputVal: ''
        };
    }


    onChangeFunc(event){

        this.setState({
            inputVal: event.target.value
        }, () => this.validationFunc() );

    }

    validationFunc(){
        let passwordMask = /(?=(.*\d){2})(?=.*[!@#$%_]).{8,}/,
            usernameMask = /(?=.*[@]).{2,}/,
            inputStyle   = this.inputEl.current.style,
            tipStyle     = this.hiddenTip.current.style;

        if (this.props.inputType === inputTypesEnum.passwordType){
            if (passwordMask.test(this.state.inputVal)) {
                this.props.isValid(true);
                inputStyle.border     = '1px solid #f1f1f1';
                inputStyle.transition = '.2s linear';
                tipStyle.opacity      = '0';
                tipStyle.transition   = '.2s linear';
            } else {
                this.props.isValid(false);
                inputStyle.border     = '1px solid red';
                inputStyle.transition = '.2s linear';
                tipStyle.opacity      = '1';
                tipStyle.transition   = '.2s linear';
            }
        } else {
            if (usernameMask.test(this.state.inputVal)) {
                this.props.isValid(true, this.state.inputVal);
                inputStyle.border     = '1px solid #f1f1f1';
                inputStyle.transition = '.2s linear';
                tipStyle.opacity      = '0';
                tipStyle.transition   = '.2s linear';
            } else {
                this.props.isValid(false);
                inputStyle.border     = '1px solid red';
                inputStyle.transition = '.2s linear';
                tipStyle.opacity      = '1';
                tipStyle.transition   = '.2s linear';

            }
        }
    }

    render(){

        return(
            <figure>
                <label htmlFor={`input-${this.props.inputType}`}>{this.props.inputType}</label>
                <bdi ref={this.hiddenTip}>Enter the valid {this.props.inputType}</bdi>
                <input
                    id = {`input-${this.props.inputType}`}
                    ref={this.inputEl}
                    value={this.state.inputVal}
                    onChange={this.onChangeFunc.bind(this)}
                />
            </figure>
        )
    }
}

export default InputElement;