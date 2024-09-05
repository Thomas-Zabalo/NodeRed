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
        </Layout>
    );
}

export default Main;