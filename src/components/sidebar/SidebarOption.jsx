import './SidebarOption.css'

const SidebarOption = ({text,Icon,active,handleClick}) => {

    return (
        <div 
        className={`sidebar-option ${active && 'sidebar-option--active'}`}
        onClick={() => handleClick(text)}
        >
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
}
 
export default SidebarOption;