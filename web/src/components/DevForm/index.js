import React, { useState, useEffect } from 'react';

import './style.css';

export default function DevForm({ onSubmit }) {
    const [github_username, setGithubUsername] = useState(''),
    [techs, setTechs] = useState(''),
    [latitude, setLatitude] = useState(0),
    [longitude, setLongitude] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                console.log(position)
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000
            }
        );
    }, []);
    
    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });
        
        setGithubUsername('');
        setTechs('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={event => setGithubUsername(event.target.value)}
                />
            </div>            
            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                />
            </div>
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        name="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={event => setLatitude(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={event => setLongitude(event.target.value)}
                    />
                </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
    )
}