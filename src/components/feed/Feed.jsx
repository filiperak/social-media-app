import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post';
import { useEffect,useContext } from 'react';
import db from '../../firebase';
import FlipMove from 'react-flip-move';
import firebase from 'firebase/compat/app';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../loading/Loading';
import Error from '../error/Error'
import { PostsContext } from '../../context/PostsContext';

const Feed = () => {
    const {state, dispatch} = useContext(PostsContext);
    const { postList,loading, error } = state;

    useEffect(() => {
        dispatch({type: 'FETCH_POSTS_REQUEST'}); 
        db.collection("posts")
        .orderBy('created_at','desc')
        .onSnapshot((snapshot) => {
            dispatch({
                type:'FETCH_POSTS_SUCCESS',
                payload:snapshot.docs.map(doc => ({
                    id:doc.id,
                    ...doc.data()
                }))
            }); 
        }, (error) => {
            dispatch({
                type: "FETCH_POSTS_FAILURE",
                payload: error,
            });
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
    const handleComment = (postId,comment,user) => {
        const commentData = {
            user: user,
            comment: comment,
            time: new Date(),
            commentId: uuidv4()
        };
        db.collection('posts')
        .doc(postId)
        .update({
            comments: firebase.firestore.FieldValue.arrayUnion(commentData)
        })
    }
    return (
        <div className='feed'>
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            {loading ? <Loading/> : null}
            {error ? <Error error={error}/> : null}
            <FlipMove>
            {postList.map(post => (  
                <Post
                    key={post.id}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    uid={post.uid}
                    handleDelete={handleDelete}
                    id={post.id}
                    created_at={post.created_at}
                    likes={post.likes}
                    handleLike={handleLike}
                    handleRemoveLike={handleRemoveLike}
                    comments={post.comments}
                    handleComment={handleComment}
                />
            ))}
            </FlipMove>
        </div>
    );
    
}
 
export default Feed;