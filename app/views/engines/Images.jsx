import React, { useState, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../assets/scripts/redux/actions';
import EngineTabs from './EngineTabs.jsx';

class ImageEngine extends Component {
    constructor (props) {
        super(props);

        const data = useSelector((state) => state.data);
        const dispach = useDispach();

        this.state = {
            show: false,
            prompt: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    changeState = () => {
        this.setState({
            show: !this.state.show 
        });
    }

    onChange = (e) => {
        this.setState({
            prompt: e.target.value
        })
        dispatch(updateData(e.target.value));
    }

    handleUpdateDate = (e) => {
        dispatch(updateData(e.target.value));
    }

    render () {
        return (
            <div className='imageEngine'>
                <div className='prompt'>
                    <label for='prpt'>Prompt</label>

                    <textarea 
                        id='prpt'
                        defaultValue={'Insira o seu prompt aqui'}
                        value={this.state.name}
                        onChange={this.onChange}>
                    </textarea>

                    <button
                        disabled={this.state.show}
                        onClick={this.changeState}>
                        Gerar Imagens
                    </button>
                </div>
            </div>
        )
    }
}

const App = () => {
    const data = useSelector((state) => state.data);

    return (
    <>
        <div className='engine-bar'>
            <EngineTabs current='picture' />
            <ImageEngine />
        </div>

        <div className='engine-dashboard'>
            Dashboard {data}
        </div>
    </>
        )
}
export default App;