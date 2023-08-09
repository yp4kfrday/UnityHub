import React, { useState } from 'react';
import { Modal } from '../../../Auth';
import styles from './Auth.module.css'

const Auth: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    const handleAuthClick = (isLogin:boolean) => {
        setShowLogin(isLogin)
        setShowModal(true);
    };

    return (
        <div className={styles.header__auth}>
            <ul>
                <li>
                    <a onClick={() => handleAuthClick(false)}>Log in</a>
                    <a onClick={() => handleAuthClick(true)}>Sign in</a>
                </li>
            </ul>
            {showModal && <Modal onClose={() => setShowModal(false)} showLogin={showLogin} />}
        </div>
    );
};
export { Auth }