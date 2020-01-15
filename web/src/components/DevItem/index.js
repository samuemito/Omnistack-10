import React from 'react';

import api from '../../services/api';

import './style.css';

export default function DevItem({ dev, deleteItem }) {
    async function removeItem() {
        deleteItem({ _id: dev._id });
    }
    return(
        <li className="dev-item">
            <img src="https://image.flaticon.com/icons/png/512/39/39220.png" alt="lixeira" className="clear" onClick={removeItem} />
            <header>
                <img src={dev.avatarURL} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.name}`}>Acessar perfil no Github</a>
        </li>
    );
}