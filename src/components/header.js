import logo from "../assets/Logo.svg"

function Header(){
    return (
        <header style={{marginLeft:"2%", marginRight:"2%"}}>
            <img src={logo} alt="Little Lemon header logo" />
        </header>
    )
}

export default Header;