import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/home">
                    Task Manager
                </Link>

                <div className="d-flex">

                    <Link className="nav-link text-white me-3" to="/home">
                        Home
                    </Link>

                    <Link className="nav-link text-white" to="/about">
                        About
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar; 