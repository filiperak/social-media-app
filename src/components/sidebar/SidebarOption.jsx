import './SidebarOption.css'

const SidebarOption = ({text,Icon,active,handleClick,opacity}) => {

    return (
        <div
        style={{ opacity: opacity ? 0.3 : 1 }}
        className={`sidebar-option ${active && 'sidebar-option--active'}`}
        onClick={() => handleClick(text)}
        >
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
}
 
export default SidebarOption;