import React, { useContext, useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('guestauth');
    navigate('/');
  };

  return (
    <div className='navbar'>
      <div className={user ? 'nav-container-user' : 'nav-container'}>
        <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className='logo'>Room Booking App</span>
        </Link>
        <div className='align'>
          <div className='navbar-list-items' >
            <FontAwesomeIcon className='faCircle' icon={faCircleQuestion} />
            <span>Help</span>
          </div>
        </div>
        
        <div className='nav-items'>
          {user ? (
            <>
              <div
                className={open ? 'user' : 'user-profile'}
                onClick={() => setOpen(!open)}>
                <span className='round-circle'>
                  {user.name.charAt(0).toUpperCase()}
                </span>
                <span>{user.name}</span>
              </div>
              {open && (
                <div className='logout' onClick={logout}>
                  Logout
                </div>
              )}
            </>
          ) : (
            <>
              
              <Link
                to={'/owner-signup'}
                style={{ color: 'inherit', textDecoration: 'none' }}>
                <button className='nav-button'>Owner Use</button>
              </Link>
              <Link
                to={'/guest-signup'}
                style={{ color: 'inherit', textDecoration: 'none' }}>
                <button className='nav-button'>Guest Use</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
