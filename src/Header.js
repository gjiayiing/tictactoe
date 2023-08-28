const Header = ({title}) => {
    return ( 
        <header className='headerStyle'>
            <h1>{title}</h1>
        </header>
     );
}

Header.defaultProps = {
    title: "Default Title" //meaning that if prop title is being used but no value, it will be replaced with "Default" instead
}
export default Header;