import React, { useEffect, useState } from 'react';

import api from './services/api';

import DevItem from './components/DevItem';
import DevForm from "./components/DevForm";

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
    const [devs, setDevs] = useState([])

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs');

            setDevs(response.data);
        }
        loadDevs();
    }, []);

    async function handleSubmit(data) {
        const response = await api.post('/devs', data);

        setDevs([...devs, response.data]);
    }

    async function handleDelete(data) {
        console.log("Deletando...");
        console.log(data);
        const response = await api.delete("/dev/"+data._id);
        console.log("Deletado");
        console.log(response.data);

        setDevs(response.data);
    }


    return (
        <>
            <div id="app">
                <aside>
                    <strong>Cadastrar</strong>
                    <DevForm onSubmit={handleSubmit} />
                </aside>

                <main>
                    <ul>
                        {devs.map(dev => (
                            <DevItem key={dev._id} dev={dev} deleteItem={handleDelete} />
                        ))}
                    </ul>
                </main>
            </div>
        </>
    );
}

export default App;
