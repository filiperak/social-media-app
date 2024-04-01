import { Button } from '@mui/material';
import { auth, provider } from '../../firebase';
import './LoginStyle.css';
import { useAuthState } from 'react-firebase-hooks/auth';
const Login = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .catch((error) => 
        alert(error.message)
        )
    
    }
    return (
        <div className="login">
            <h1>Login</h1>
            {user !== null ? (
                <>
                <div>your profile</div>
                <Button onClick={() => auth.signOut()}>
                    Sign Out
                </Button>
                </>

            ):(
                <>
                <p>logi in</p>
                <Button onClick={signIn}>
                    Siggn in with google
                </Button>
                </>

            )}
        </div>
    );
}
 
export default Login;