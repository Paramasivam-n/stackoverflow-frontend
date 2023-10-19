import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from "jwt-decode";

import logo from '../../assets/logo.png'
import icon from  "../../assets/icon.png"
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser.js'
import bars from "../../assets/bars-solid.svg";

const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "UNVERIFIED" });
    navigate("/");
    dispatch(setCurrentUser(null));
    window.location.reload();
  };


  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      const currentTime = Date.now()
      const expirationTime = decodedToken.exp * 1000 - currentTime
      if (expirationTime > 0) {
        const logoutTimeout = setTimeout(() => {
          handleLogout()
        }, expirationTime);
        return (() => clearTimeout(logoutTimeout))
      }
      else {
        handleLogout();
      }
    }

    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    //eslint-disable-next-line
  }, [User?.token, dispatch]);

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img id="logo" src={logo} alt="logo" />
            <img id="icon" src={icon} alt="logo" />
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>
          <form id="search-box">
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="navbar-2">
          {User === null ? (
            <Link to="/Auth" id="login-button" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
                width={'16px'}
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar