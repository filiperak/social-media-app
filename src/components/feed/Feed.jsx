import './Feed.css'
import TweetBox from './TweetBox';
const Feed = () => {
    return (
        <div className='feed'>
            <div className="feed-header">
                <h2>Home</h2>
            </div>

            <TweetBox/>
        </div>
    );
}
 
export default Feed;