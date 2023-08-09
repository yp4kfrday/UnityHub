import React from 'react';
import styles from './Modal.module.css'
import { Login, SignUp } from '../index';

interface ModalProps {
    onClose: () => void;
    showLogin: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, showLogin }) => {
    return (
        <div className={styles.overlay} onClick={() => onClose()}>
            <div className={styles.modal__auth} onClick={e => e.stopPropagation()}>
                <div className={styles.modal__content}>
                    <h2 className={styles.modal__title}>{showLogin ? 'Sign in' : 'Log in'}</h2>
                    {showLogin ? <Login /> : <SignUp />}
                </div>
            </div>
        </div>
    );
};

export { Modal };