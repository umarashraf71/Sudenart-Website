import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.css';

function Navbar () {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [scrollNav, setScrollNav] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);


    const showButton = () => {

        if(window.innerWidth <= 960) {

            setButton(false);
        }
        else {

            setButton(true);
        }
    };


    const Nav = () => {

        if(window.scrollY > 0 ) {

            setScrollNav(true);
        }
        else {

            setScrollNav(false);
        }
    }

    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', Nav);


    useEffect(()=>{

        showButton();

    },[])

    return (

        <nav className={scrollNav ? 'navbar-scroll' : 'navbar'}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                    SUDENART<i class="fas fa-palette"></i>
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>     

                    <li className="nav-item">
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu} >
                            Services
                        </Link>
                    </li>     

                    <li className="nav-item">
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu} >
                            Contact
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu} >
                            Sign-up
                        </Link>
                    </li>
                    <li className="nav-button">
                    {
                
                    /* if button hook is true then show the button */
                    button && <Button buttonStyle='btn--outline' >SIGN UP</Button>
                    
                    }
                    </li>
                </ul>
            </div>
        </nav>
    )

}


export default Navbar;