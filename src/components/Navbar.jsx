import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
const Navbar = () =>{
    
    const navigate = useNavigate();

    const handleRegistration = () =>{
        navigate("./register");
    };
    return(
        <nav className="navbar">
            <div>
            <h1>Neighborhood watch security</h1>
            <input type="text" placeholder="Search"/>
            <button onClick={handleRegistration}>Register</button>
            </div>
            </nav>
             )
}
export default Navbar
