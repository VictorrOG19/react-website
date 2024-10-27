import "../css/App.css";

function Navbar() {
    return (
        <nav className="nav">
            <a className="logo" href="/">Victor</a>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;