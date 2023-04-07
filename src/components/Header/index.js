import React from 'react'
import './styles.css'
import { Search, Person2Rounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Header() {
  const handleAuthentication = () => { }

  return (
    <>
      <div className='header'>
        <Link to="/" className="headerLogo">
          <span className='small'>De</span>
          <span className='big'>Blog</span>
        </Link>

        <div className="headerSearch">
          <input type="text" placeholder='Search...' className='headerSearchInput' />
          <span className='headerSearchIcon'><Search /></span>
        </div>

        <div className="headerNav">
          <div>
            <div className="headerNavLink" onClick={handleAuthentication}>
              <div>
                <span className="span_one">Hello User</span>
                <span className="span_two">Sign in</span>
              </div>
            </div>
          </div>

          <Link to="/orders">
            <div className="headerNavLink">
              <span className="span_one">All</span>
              <span className="span_two">Posts</span>
            </div>
          </Link>

          <Link to="/customer">
            <div className="headerNavLink">
              <span className="span_one">Create</span>
              <span className="span_two">Post</span>
            </div>
          </Link>

          <Link to="/cart">
            <div className="headerNavLinkCart">
              <Person2Rounded color='#ccc' fontSize='25' />
            </div>
          </Link>
        </div>
      </div>

      {/* Profile */}
      <div className='profile'></div>
    </>
  )
}

export default Header
