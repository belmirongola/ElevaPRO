import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../assets/scripts/redux/actions';
import EngineTabs from './EngineTabs.jsx';

const ImageEngine = () => {
    const [show, setShow] = useState(false);
    const [prompt, setPrompt] = useState('Insira o seu prompt aqui');
    const dispatch = useDispatch();

    const changeState = () => {
        setShow(!show);
    };

    const onChange = (e) => {
        setPrompt(e.target.value);
        dispatch(updateData(e.target.value));
    };

    const handleUpdateDate = (e) => {
        dispatch(updateData(e.target.value));
    };

    return (
        <div className='imageEngine'>
            <div className='prompt'>
                <label htmlFor='prpt'>Prompt</label>

                <textarea
                    id='prpt'
                    value={prompt}
                    onChange={onChange}>
                </textarea>

                <button
                    disabled={show}
                    onClick={changeState}>
                    Gerar Imagens
                </button>
            </div>
        </div>
    );
};

const App = () => {
    const data = useSelector((state) => state.data);
    console.log(data)
    return (
        <>
            <div className='engine-bar'>
                <EngineTabs current='picture' />
                <ImageEngine />
            </div>

            <div className='engine-dashboard'>
                Dashboard -> {data.data}
            </div>
        </>
    );
};

export default App;
