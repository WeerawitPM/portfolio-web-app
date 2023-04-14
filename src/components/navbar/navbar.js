import "./navbar.css"
const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <p>Portfolio</p>
                <div>
                    <a href="#profile">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#education">Education</a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;