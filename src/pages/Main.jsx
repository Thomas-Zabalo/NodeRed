import React, { useState } from 'react';
import Layout from '../templates/Layout';
import nodeRedIcon from '../assets/images/node-red-icon.png';
import ncrIcon from '../assets/images/ncr-icon.png';
import {
    PUBLIC_BUILD_PATH,
    PUBLIC_NODERED_PATH,
    PUBLIC_API_PATH
} from '../constants';
import './Main.scss';

function Main() {
    const [ pingResult, setPingResult ] = useState('ping');
    const callPing = () => {
        fetch(`${PUBLIC_API_PATH}${pingResult}`)
            .then(res => res.json())
            .then(({ data }) => setPingResult(data))
            .catch(e => console.error(e));
    };
    return (
        <Layout>
            <div className="ncr-shortcuts">
                <button onClick={callPing} title="No-Code React Boilerplate" className="ncr-link-img">
                    <img src={`${PUBLIC_BUILD_PATH}${ncrIcon}`} alt="ncr-boilerplate icon" width="64px"/>
                    <span>{`API: ${pingResult.toUpperCase()}`}</span>
                </button>
                <a
                    href={PUBLIC_NODERED_PATH}
                    target="_blank"
                    title="Node-RED Dashboard"
                    className="ncr-link-img"
                    rel="noreferrer"
                >
                    <img src={`${PUBLIC_BUILD_PATH}${nodeRedIcon}`} alt="node-red icon" width="64px"/>
                    <span>{'Dashboard'}</span>
                </a>
            </div>
            <div className="tp-rules">
                <p>{'Enoncé du TP 1'}</p>
                <ol>
                    <li>{'Côté Node.RED récupérer la liste des users.json, la base du code est dans l\'onglet "Treatment" déjà codé.'}</li>
                    <li>{'Nettoyer les données pour être RGPD compatible et les stocker dans la base de données de Node.RED "flow".'}</li>
                    <li>{'Côté React, récupérer ces données et les afficher dans une liste d\'éléments.'}</li>
                    <li>{'Avoir un CRUD : Create Read Update Delete donc pour ajouter/modifier/supprimer des utilisateurs'}</li>
                    <li>{'Le rendre Design avec Material-UI et des icones (Font-Awesome).'}</li>
                    <li>{'Utiliser un React-Router pour faire un lien depuis le dashboard.'}</li>
                </ol>
            </div>
        </Layout>
    );
}

export default Main;