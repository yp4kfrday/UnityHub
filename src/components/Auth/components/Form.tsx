import { FC, useState } from "react"
import styles from './Form.module.css'

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className={styles.form}>
            <div className={styles.form__group}>
                <input
                    className={styles.input__auth}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                />
                <label className={styles.input__label}>email</label>
            </div>
            <div className={styles.form__group}>
                <input
                    className={styles.input__auth}
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder=" "
                />
                <label className={styles.input__label}>password</label>
            </div>
            <div className={styles.btn__container}>
                <button
                    className={styles.button__auth}
                    onClick={() => handleClick(email, pass)}
                >
                    {title}
                </button>
            </div>

        </div>
    )
}

export { Form }