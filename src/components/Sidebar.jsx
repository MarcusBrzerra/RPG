import { Link } from "react-router";
import dado from "../assets/dado.png"

const Sidebar = () => {
    return(

        <aside className="sidebar">
            <header className="sidebar-header">
                {/*<img src={dado} alt="logo de um dado de 20 lados" /> */}
                <h2>Rpg - Game</h2>
                <p>sidebar</p>
            </header>
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