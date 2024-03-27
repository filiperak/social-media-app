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

const Post = forwardRef(({displayName,username,verified,text,image,avatar,handleDelete, id},ref) => {

    const onDeleteClick = () => {
        handleDelete(id);
    }
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
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderOutlinedIcon fontSize='small'/>
                    <PublishIcon fontSize='small'/>
                    <span onClick={onDeleteClick}>X</span>

                </div>
            </div>
        </div>
    );
}
)
 
export default Post;