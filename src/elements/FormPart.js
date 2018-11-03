import React, {Component} from 'react';
import InputElement from './InputElement';
import {inputTypesEnum} from '../DataController/inputTypesEnum';

class FormPart extends Component{

    constructor(){
        super();
        this.modalDialog = React.createRef();
        this.state = {
            formShadow : false,
            isValidName: false,
            isValidPass: false,
            userName   : '',
            showModal  : false
        }
    }

    onMouseMove(){
        this.setState((prevState) => {
            return {formShadow: !prevState.formShadow};
        });
    }

    isValidName(isValid, userName){
        this.setState({
            isValidName: isValid,
            userName: userName
        });
    }

    isValidPass(isValid){
        this.setState({
            isValidPass: isValid
        });
    }

    showHideModal(){
        this.setState((prevState) => {
            return {showModal: !prevState.showModal};
        });
    }


    render(){

        let activeBtn = this.state.isValidName && this.state.isValidPass;

        return(
            <main
                onMouseOver={this.onMouseMove.bind(this)}
                onMouseOut={this.onMouseMove.bind(this)}
                style={{
                    boxShadow: this.state.formShadow ? '2.4px 1.8px 2.9px 0.1px rgba(7, 10, 8, 0.1)' : 'none',
                    transition: '.3s linear'
                }}
            >
                <form>
                        <InputElement
                            inputType={inputTypesEnum.nameType}
                            isValid={this.isValidName.bind(this)}
                        />

                        <InputElement
                            inputType={inputTypesEnum.passwordType}
                            isValid={this.isValidPass.bind(this)}
                        />

                    <figure>
                        <button
                            disabled={!activeBtn}
                            type={'button'}
                            style={{
                                backgroundColor: activeBtn ? 'rgb(237, 0, 142)' : 'rgba(237, 0, 142, 0.5)',
                                cursor: activeBtn && 'pointer'
                            }}
                            onClick={this.showHideModal.bind(this)}
                        >Отправить</button>
                        <a>Forgot a password?</a>
                    </figure>
                </form>
                <dialog ref={this.modalDialog}
                    style={{
                      display: this.state.showModal ? 'flex' : 'none'
                    }}>
                    <span>
                        {'Hello ' + this.state.userName + '!'}
                        <button onClick={this.showHideModal.bind(this)}>OK</button>
                    </span>
                </dialog>
            </main>
        )
    }
}

export default FormPart;