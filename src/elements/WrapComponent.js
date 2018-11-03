import React, {Component} from 'react';
import LogoPart from './LogoPart';
import FormPart from './FormPart';
import '../style.scss';

class WrapComponent extends Component{

    render(){
        return(
            <section>
                <LogoPart />
                <FormPart />
                <footer>
                    Powered by <span>PerceptionBox</span>
                </footer>
            </section>
        )
    }
}

export default WrapComponent;