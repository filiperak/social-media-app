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
import { forwardRef } from 'react';
import db, { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    handleDelete, 
    handleLike,
    likedPost,
    handleRemoveLike,
    id,
    created_at,
    likes,
    comments
    },ref) => {

    const [user] = useAuthState(auth);
    let userUid = user.uid

    const onDeleteClick = () => {
        handleDelete(id);
    }
    const onLikeClick = () => {
        likes.likedBy.includes(userUid)?handleRemoveLike(id,userUid) : handleLike(id,userUid);

        // handleLike(id,userUid);
    }
    const formatTimestamp = (timestamp) => {
        if (!timestamp || !timestamp.seconds) {
            return 'nodate';    //PŠRISIO OVO KASNIJE
        }
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleString();
    };
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
                    </div>
                    <div className="post-header-description">
                        <p>{text}</p>
                    </div>
                </div>
                {image.trim().length != 0 && <img 
                src={image}
                alt="user img" />}
                <div className="post-time-stamp">
                <span>{formatTimestamp(created_at)}</span>
                </div>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <div className="post-likes">
                    <FavoriteBorderOutlinedIcon 
                    fontSize='small'
                    onClick={onLikeClick}/>
                    {likes.likesNumber}
                    </div>
                    {/* <FavoriteBorderOutlinedIcon fontSize='small'/> */}
                    <PublishIcon fontSize='small'/>
                    <span onClick={onDeleteClick}>X</span>

                </div>
            </div>
        </div>
    );
}
)
 
export default Post;