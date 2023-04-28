import SearchBar from './SearchBar.jsx';
import { NavLink } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {


    const handleLogOut =() => {
        setAccess(false);
    }
    return (
        <nav>
            

            <NavLink to = '/about'><button>About</button></NavLink>
            <NavLink to = '/'><button>Home</button></NavLink>
            <NavLink to = '/favorites'><button>Favorites</button></NavLink>


            <button onClick={handleLogOut}>LOG OUT</button>
            <SearchBar onSearch={onSearch} />
        
        </nav>
    )
}

export default Nav