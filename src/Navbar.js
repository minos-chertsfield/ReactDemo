const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Little Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                |
                <a href="/new">New</a>
            </div>
        </nav>
    );
}

export default Navbar;