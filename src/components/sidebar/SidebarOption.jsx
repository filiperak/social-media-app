import './SidebarOption.css'

const SidebarOption = ({text,Icon,active}) => {
    return (
        <div className={`sidebar-option ${active && 'sidebar-option--active'}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
}
 
export default SidebarOption;