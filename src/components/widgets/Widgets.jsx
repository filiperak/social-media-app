import { Calculate } from '@mui/icons-material';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';
const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets-input">
                <SearchIcon className='widgets-search-icon'/>
                <input type="text"placeholder='Serch Twitter'/>
            </div>
            <div className="widgets-widget-container">
                <h2>What's Happening</h2>
            <TwitterTweetEmbed tweetId={'1771622119715000357'}/>
            <TwitterTimelineEmbed sourceType='profile' screenName='VladoGeorgiev' options={{ height: 250 }}/>
            <TwitterShareButton
             url={"https://facebook.com"}
            options={{ text: "test", via: "test" }}
             />
            </div>
        </div>

    );
}
 
export default Widgets;