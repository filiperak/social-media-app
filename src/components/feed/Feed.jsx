import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import FlipMove from 'react-flip-move';


const Feed = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
        console.log(posts);

      }, []);

    return (
        <div className='feed'>
            <div className="feed-header">
                <h2>Home</h2>
            </div>

            <TweetBox/>
            <FlipMove>
            {posts.map(post => (  
                <Post
                    key={post.id}   //promeni ovu i post id
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
            </FlipMove>
        </div>
    );
}
 
export default Feed;