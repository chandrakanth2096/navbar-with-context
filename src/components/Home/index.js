import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeDarkClassName = isDarkTheme ? 'dark-home' : null
      return (
        <>
          <Navbar />
          <div className={`home-container ${homeDarkClassName}`}>
            <img className="home-img" src={homeImgUrl} alt="home" />
            <h1 className={`home-heading ${homeDarkClassName}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
