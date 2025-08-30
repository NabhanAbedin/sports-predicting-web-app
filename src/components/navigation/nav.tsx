import { FC } from "react";
import { Link } from "react-router-dom";
import '../../styles/navigation.css';

const Nav:FC = () => {

    return (
        <nav>
            <Link to={'/'} className="nav-link">
                Home
            </Link>
            <Link to={'/trivia'} className="nav-link">
                Trivia
            </Link>
            <Link to={'/predictions'} className="nav-link">
                Predictions
            </Link>
        </nav>
    )
}

export default Nav;