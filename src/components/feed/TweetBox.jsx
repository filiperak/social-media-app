import { useState } from 'react';
import './TweetBox.css'
import { Avatar,Button } from '@mui/material';
import db from '../../firebase';


const TweetBox = () => {
    const [tweetMesssage,setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:'Filip Erak',
            username:'filiperak',
            verified:true,
            text:tweetMesssage,
            image:tweetImage,
            avatar:''
        });
        setTweetImage('');
        setTweetMessage('');
    }
    return (
        <div className='tweet-box'>
            <form>
                <div className="tweet-box-input">
                    <Avatar/>
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