import './TweetBox.css'
import { Avatar,Button } from '@mui/material';

const TweetBox = () => {
    return (
        <div className='tweet-box'>
            <form>
                <div className="tweet-box-input">
                    <Avatar/>
                    <input type="text" placeholder= "What's happening?"/>
                </div>
                <input type="text" placeholder='Enter image URL' className='tweet-box-input-img'/>

                <Button className='tweet-box-tweet-button'>Tweet</Button>
            </form>
        </div>
    );
}
 
export default TweetBox;