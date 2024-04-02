import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SidebarOption from './SidebarOption';
import TagIcon from '@mui/icons-material/Tag';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const[isActive,setIsActive] = useState('Home');
    const navigate = useNavigate();

    const handleActiveClick = (text) => {
        if(text !== 'Home' && text !== 'Profile'){
            return false;
        }
        setIsActive(text);
        navigate(`/${text.toLowerCase()}`);
        console.log(text);
    }
    

    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar-twitter-icon'/>
            <SidebarOption text={'Home'} Icon={HomeIcon} active={isActive == 'Home'} handleClick= {handleActiveClick} opacity={false}/>
            <SidebarOption text={'Explore'} Icon={TagIcon} active={isActive == 'Explore'} handleClick= {handleActiveClick}  opacity={true}/>
            <SidebarOption text={'Notification'} Icon={NotificationsActiveIcon} active={isActive == 'Notification'} handleClick= {handleActiveClick} opacity={true}/>
            <SidebarOption text={'Messages'} Icon={MailOutlineOutlinedIcon} active={isActive == 'Messages'} handleClick= {handleActiveClick} opacity={true}/>
            <SidebarOption text={'Bookmarks'} Icon={BookmarkBorderOutlinedIcon} active={isActive == 'Bookmarks'} handleClick= {handleActiveClick} opacity={true}/>
            <SidebarOption text={'Lists'} Icon={ListAltOutlinedIcon} active={isActive == 'Lists'} handleClick= {handleActiveClick} opacity={true}/>
            <SidebarOption text={'Profile'} Icon={PermIdentityOutlinedIcon} active={isActive == 'Profile'} handleClick= {handleActiveClick} opacity={false}/>
            <SidebarOption text={'More'} Icon={MoreHorizOutlinedIcon} active={isActive == 'More'} handleClick= {handleActiveClick} opacity={true}/>

            <Button variant='outlined' className='sidebar-tweet' fullWidth>Tweet</Button>
        </div>
    );
}
 
export default Sidebar;