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

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar-twitter-icon'/>
            <SidebarOption active text={'Home'} Icon={HomeIcon}/>
            <SidebarOption text={'Explore'} Icon={TagIcon}/>
            <SidebarOption text={'Notification'} Icon={NotificationsActiveIcon}/>
            <SidebarOption text={'Messages'} Icon={MailOutlineOutlinedIcon}/>
            <SidebarOption text={'Bookmarks'} Icon={BookmarkBorderOutlinedIcon}/>
            <SidebarOption text={'Lists'} Icon={ListAltOutlinedIcon}/>
            <SidebarOption text={'Profile'} Icon={PermIdentityOutlinedIcon}/>
            <SidebarOption text={'More'} Icon={MoreHorizOutlinedIcon}/>

            <Button variant='outlined' className='sidebar-tweet' fullWidth>Tweet</Button>
        </div>
    );
}
 
export default Sidebar;