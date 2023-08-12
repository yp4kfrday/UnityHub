import { Link } from 'react-router-dom'
import { SignUp } from '../../components/Auth'
import { Todo } from '../../components/Todo'

const RegisterPage = () => {
  return (
    <div>
        <h1>Register</h1>
        <SignUp/>
        <p>
            Already have an account <Link to='/login'>Sign in</Link>
        </p>
        <Todo />
    </div>
  )
}

export default RegisterPage