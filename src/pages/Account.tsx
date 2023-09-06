import LoginForm from "../components/Forms/LoginForm"
import RegistrationForm from "../components/Forms/RegistrationForm"
import * as React from 'react'
import { useAppDispatch, useAppSelector } from "../redux/redux"
import Button from "../components/Button"
import { logout } from "../redux/slices/authSlice"

const Account = () => {
    const { data } = useAppSelector(state => state.authSlice)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        
    }, [data])
    const onClickLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }
    return ( <div className="accountContainer">
        {
            data.length === 0 ? <div className="formWrapper">
            <LoginForm />
            <RegistrationForm />
         </div> : <div className="accountWrapper">
          <div>
          <div className="name">welcome, {data?.email}</div>
         <Button size="medium" primary={true} available={true} onClickButton={() => onClickLogout()}>log out</Button>
          </div>
         </div>
        }
        
    </div> )
}
 
export default Account