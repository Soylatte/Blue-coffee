import { Link } from 'react-router-dom';
function Navbar () {
    return(
        <div>
            <ul className="navbar-list">
                <li className="navbar-items"><Link to="/about">ABOUT</Link></li>
                <li className="navbar-items">MENU</li>
                <li className="navbar-items">REGULARS</li>
            </ul>
        </div>
    )
}
export default Navbar;