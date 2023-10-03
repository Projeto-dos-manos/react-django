import { NavbarContainer, NavbarContent, NavbarItems } from "./styles";
import { FiSearch } from "react-icons/fi";
import { ImRocket, ImCart, ImProfile } from "react-icons/im";
import { BsCart, BsPerson } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <ImRocket className="icon" />
                <div className="search-container">
                    <input type="text" className="search" placeholder="Processador Intel..." />
                    <FiSearch className="search-icon" />
                </div>
                <div className="navbar-icons">
                    <BsCart className="icon desktop" />
                    <BsPerson className="icon profile desktop" />
                    <AiOutlineMenu className="icon mobile" />
                </div>
            </NavbarContent>
            <NavbarItems>
                <h3 className="navbar-item">Smartphones</h3>
                <h3 className="navbar-item">Notebooks</h3>
                <h3 className="navbar-item">Periféricos</h3>
                <h3 className="navbar-item">Hardware</h3>
                <h3 className="navbar-item">Desktops</h3>
                <h3 className="navbar-item">Consoles</h3>
                <h3 className="navbar-item">Smartphones</h3>
                <h3 className="navbar-item">Notebooks</h3>
                <h3 className="navbar-item">Periféricos</h3>
            </NavbarItems>
        </NavbarContainer>
    )
}

export default Navbar;