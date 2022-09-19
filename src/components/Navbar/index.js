import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const darkClassName = isDarkTheme ? 'dark' : null
      const darkNavClassName = isDarkTheme ? 'dark-nav' : null
      const changeThemeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`navbar ${darkNavClassName}`}>
          <Link to="/" className="link">
            <img
              className="website-logo"
              src={websiteLogoUrl}
              alt="website logo"
            />
          </Link>

          <ul className="nav-list">
            <Link to="/" className="link">
              <li className={`nav-item ${darkClassName}`}>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className={`nav-item ${darkClassName}`}>About</li>
            </Link>
          </ul>
          <button type="button" className="theme-button" onClick={toggleTheme}>
            <img className="theme-icon" src={changeThemeIcon} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
