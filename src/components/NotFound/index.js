import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notDarkClassName = isDarkTheme ? 'dark-not-found' : null
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${notDarkClassName}`}>
            <img
              className="not-found-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`not-found-heading ${notDarkClassName}`}>
              Lost Your Way?
            </h1>
            <p className="not-found-content">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
