import Private from "../../hoc/Privet";
import SignupPage from "../../containers/SignUp";
import Authorize from "../../hoc/Authorize";




const SignUp = Authorize(SignupPage)


export default SignUp;