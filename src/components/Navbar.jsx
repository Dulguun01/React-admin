import NavbarMenu from "./navbar/NavbarMenu";
import NavbarWrapper from "./navbar/NavbarWrapper";
import NavbarDropdown from "./navbar/NavbarDropdown";

export default function Navbar(){

const menuItems = [
    {label: 'Home' , link: '/'},
    {label: 'Article' , link: 'Articles'},
    {label: 'Feedback' , link: '#'},
    {label: 'Home' , link: '#'}
];

const dropDownItems = [
    {label:'Home' , link: '/'},
    {label:'Article' , link: 'Articles'},
    {label:'sing out' , link: '#'},
    {label:'---' , link: '#'},
    {label:'sign in' , link: '#'},
]

    return (
    <NavbarWrapper>
    
        <NavbarMenu title="Adimn" items={menuItems} />
        <NavbarDropdown img='http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQkiYCWt-moZw3h0NlQ7d4CgNkVuJIW7AFqj-qEOgGxXpPWtzBrQeApPVZJHCPqCkxf' items={dropDownItems}/>
        
    </NavbarWrapper>
    )
}