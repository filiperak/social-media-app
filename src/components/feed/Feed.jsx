import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import FlipMove from 'react-flip-move';
import firebase from 'firebase/compat/app';



const Feed = () => {
    const [posts,setPosts] = useState([]);
    const [likedPost,setLikedPost] = useState(false)

    useEffect(() => {
        db.collection("posts")
        .orderBy('created_at','desc')
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
    const handleLike = (postId, userUid) => {
        db.collection('posts')
        .doc(postId)
        .update({
            'likes.likesNumber': firebase.firestore.FieldValue.increment(1),
            'likes.likedBy': firebase.firestore.FieldValue.arrayUnion(userUid)
        })
        .then(() => {
            console.log('post liked');
        })
        .catch((err) => console.log(err))
    }

    const handleRemoveLike = (postId,userUid) => {
        db.collection('posts')
        .doc(postId)
        .update({
            'likes.likesNumber': firebase.firestore.FieldValue.increment(-1),
            'likes.likedBy': firebase.firestore.FieldValue.arrayRemove(userUid)
        })
        .then(() => {
            console.log('post liked');
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
                    key={post.id}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    handleDelete={handleDelete}
                    id={post.id}
                    created_at={post.created_at}
                    likes={post.likes}
                    // likes={post.likes.likesNumber}
                    handleLike={handleLike}
                    likedPost={likedPost}
                    handleRemoveLike={handleRemoveLike}
                    comments={post.comments}
                />
            ))}
            </FlipMove>
        </div>
    );
}
 
export default Feed;