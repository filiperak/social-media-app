import { useState } from 'react';
import './TweetBox.css'
import { Avatar,Button } from '@mui/material';
import db, { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';



const TweetBox = () => {
    const [tweetMesssage,setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const [user] = useAuthState(auth)
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:user.displayName,
            username:user.email,
            verified:true,
            text:tweetMesssage,
            image:tweetImage,
            avatar:user.photoURL,
            uid:user.uid,
            created_at: new Date(),
            likes:{
                likesNumber:0,
                likedBy:[]
                },
            comments:[]
        });
        setTweetImage('');
        setTweetMessage('');
    }
    return (
        <div className='tweet-box'>
            <form>
                <div className="tweet-box-input">
                    <Avatar 
                    />
                    <input 
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMesssage} 
                    type="text" 
                    placeholder= "What's happening?"/>
                </div>
                <input 
                value={tweetImage}
                onChange={e => setTweetImage(e.target.value)}
                type="text" 
                placeholder='Optional: Enter image URL' 
                className='tweet-box-input-img'/>

                <Button
                onClick={sendTweet} 
                type='submit' 
                className='tweet-box-tweet-button'
                >Tweet</Button>
            </form>
        </div>
    );
}
 
export default TweetBox;