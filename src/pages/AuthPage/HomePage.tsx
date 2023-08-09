import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/use-Auth"
import { removeUser } from "../../store/slices/userSlices"
import { useAppDispatch } from "../../hooks/redux-hooks"

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome {email} </h1>

      <button
        onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (<Navigate to='/login' />)
}

export default HomePage