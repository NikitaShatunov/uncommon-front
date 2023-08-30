import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const Account = () => {
    return ( <div className="accountContainer">
        <div className="fomrWrapper">
           <LoginForm />
           <RegistrationForm />
        </div>
    </div> );
}
 
export default Account;