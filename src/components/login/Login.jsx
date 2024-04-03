import { Avatar, Button } from '@mui/material';
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
    console.log(user);
    return (
        <div className="login">
            <h1>Profile</h1>
            {user !== null ? (
                <div className='login-yes'>
                <h4>Your profile</h4>
                <Avatar src={user.photoURL} className='login-avatar'/>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <Button 
                onClick={() => auth.signOut()}
                className='login-google-login'>
                    Sign Out
                </Button>
                </div>

            ):(
                <div className='login-not-log'>
                <h4>Sign in</h4>
                <Avatar className='login-avatar'/>
                <p>Sing in with your google account, after you will be able to like,comment,share and post on the home page.</p>
                <Button onClick={signIn} className='login-google-login'>
                    Sign in with google
                </Button>
                </div>

            )}
        </div>
    );
}
 
export default Login;