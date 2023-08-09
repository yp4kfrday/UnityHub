import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../../../store/slices/userSlices";
import { useAppDispatch } from "../../../hooks/redux-hooks";

const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate  = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate ('/')
            })
            .catch(console.error)
    };

    return (
        <Form
            title="Do it"
            handleClick={handleRegister}
        />
    )
}

export { SignUp }