import { Avatar } from '@mui/material';
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PublishIcon from '@mui/icons-material/Publish';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { forwardRef, useEffect, useState , useRef} from 'react';
import db, { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from '@mui/base';
import Swal from "sweetalert2";  
import SweetAlert2 from 'react-sweetalert2';


const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    uid,
    handleDelete, 
    handleLike,
    likedPost,
    handleRemoveLike,
    id,
    created_at,
    likes,
    comments,
    handleComment
    },ref) => {
        // Swal.fire({
        //     title: "Login",
        //     text: "Login to post!",
        //     icon: "info",
        //     confirmButtonColor: '#50b7f5' 
        //   });
          
          
    const [user] = useAuthState(auth);
    let userUid = undefined;
    let userDisplayName = undefined
    if(user){
        let userUid = user.uid;
        let userDisplayName = user.displayName
    }

    const [likeColor,setLikeColor] = useState(false);
    const [deleteButton,setDeleteButton] = useState(false);
    const [commentInput,setCommentInput] = useState('');
    const [showComments,setShowComments] = useState(false);
    const inputRef = useRef(null);

    const onDeleteClick = () => {
        if(uid != userUid){
            setDeleteButton(!deleteButton)
            return false;
        }
        handleDelete(id);
    }
    const onLikeClick = () => {
        if(!user){
            Swal.fire({
                title: "Login",
                text: "Login to like!",
                icon: "info",
                confirmButtonColor: '#50b7f5' 
              });
              
            return false
        }
        if(likes.likedBy.includes(userUid)){
            handleRemoveLike(id,userUid)
            setLikeColor(false)
        }else{
            handleLike(id,userUid);
            setLikeColor(true)
        }
    }
    const onCommentSubmit = (e) => {
        e.preventDefault();
        if(!user){
            Swal.fire({
                title: "Login",
                text: "Login to comment!",
                icon: "info",
                confirmButtonColor: '#50b7f5' 
              });
              
            setCommentInput('');
            return false
        }
        handleComment(id,commentInput,userDisplayName);
        setCommentInput('');
    }
    const formatTimestamp = (timestamp) => {
        if (!timestamp || !timestamp.seconds) {
            return 'nodate';    //PŠRISIO OVO KASNIJE
        }
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleString();
    };
    useEffect(() => {
        if (showComments) {
          inputRef.current.focus();
        }
    }, [showComments]);

    return (
        <div className='post' ref={ref}>
            <div className="post-avatar">
            <Avatar src={avatar}/>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-header-text">
                        <h3>
                            {displayName}
                            <span className='post-header-special'>
                                {verified && <VerifiedIcon className='post-badge'/>}
                                {`@${username}`}
                            </span>
                        </h3>
                        {deleteButton && 
                        <span 
                        className='post-delete-span'
                        onClick={onDeleteClick}>
                            Delete
                        </span>}
                        <MoreVertIcon
                        onClick={()=> setDeleteButton(!deleteButton)}
                        />
                    </div>
                    <div className="post-header-description">
                        <p>{text}</p>
                    </div>
                </div>
                {image.trim().length != 0 && <img 
                src={image}
                alt="user img" />}

                <div className="post-comments">
                    <p>
                        <p>{comments.length == 0?('no comments'):(`${comments.length} comments`)}</p>
                        <p>{formatTimestamp(created_at)}</p>
                    </p>
                    <div className="post-comment-list">
                    {showComments &&(
                        comments.map(elem =>  (
                            <>
                            <div
                            key={elem.commentId}>
                                <p>{elem.user}{':'}</p>
                                <p>{elem.comment}</p>
                            </div>
                            </>
                        ))
                    )}
                    {showComments && (
                        <form 
                        onSubmit={onCommentSubmit}
                        className="post-comment-input">
                            <input 
                            ref={inputRef}
                            onChange={e => setCommentInput(e.target.value)}
                            value={commentInput}
                            type="text" 
                            placeholder='add comment...'/>
                            <Button type='submit'>
                                Post
                            </Button>
                        </form>
                    )}
                    </div>

                </div> 


                <div className="post-footer">
                    <ChatBubbleOutlineIcon 
                    onClick={() => setShowComments(!showComments)}
                    fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <div className="post-likes">
                    <FavoriteBorderOutlinedIcon 
                    fontSize='small'
                    style={likeColor ? { color: 'red' } : {}}
                    onClick={onLikeClick}/>
                    <span>
                        {!likes.likesNumber == 0? likes.likesNumber:null}
                    </span>
                    </div>
                    <PublishIcon fontSize='small'/>
                </div>
            </div>
        </div>
    );
}
)
 
export default Post;