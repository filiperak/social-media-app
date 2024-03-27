import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import FlipMove from 'react-flip-move';


const Feed = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })));
        });
    }, []);
    const handleDelete = (postId) => {
        db.collection('posts')
        .doc(postId)
        .delete()
        .then(() => {
            console.log('post deleted');
        })
        .catch((err) => console.log(err))

    }
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
                    handleDelete={handleDelete}
                    id={post.id}
                />
            ))}
            </FlipMove>
        </div>
    );
}
 
export default Feed;