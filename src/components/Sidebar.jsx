import { Link } from "react-router";
import dado from "../assets/dado.png"
import "../components/Sidebar.css"

const Sidebar = () => {
    return(

        <aside className="sidebar">
            <nav className="sidebar-navbar">
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/ficha'>Ficha</Link></li>
                    <li><Link to='/personagem'>Personagem</Link></li>
                </ul>
            </nav>                
        </aside>
        
    );
}
export default Sidebar;