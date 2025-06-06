import { Link } from "react-router-dom";

export default function Sidebar({onToggle}){
    return(
        <div className="sidebar bg-dark text-white p-3 p5-5 position-fixed h-100">
            <button
            className="btn btn-outline-light mb-3 menu_tog"
            onClick={onToggle}
            >
            ☰
            </button>
            <h5 className="mb-4 mt-5">Menu</h5>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to='/' className="nav-link text-white sidebar_link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/feature1' className="nav-link text-white sidebar_link" >feature 1 </Link>
                </li>
                <li className="nav-item">
                    <Link to='/feature2' className="nav-link text-white sidebar_link" >feature 2</Link>
                </li>
                <li className="nav-item">
                    <Link to='/feature3' className="nav-link text-white sidebar_link" >feature 3</Link>
                </li>
                <li className="nav-item">
                    <Link to='/feature4' className="nav-link text-white sidebar_link" >feature 4</Link>
                </li>
                <li className="nav-item">
                    <Link to='/feature5' className="nav-link text-white sidebar_link" >feature 5</Link>
                </li>
            </ul>
        </div>
    );
}