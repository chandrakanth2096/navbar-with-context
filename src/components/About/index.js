import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutDarkClassName = isDarkTheme ? 'dark-about' : null
      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutDarkClassName}`}>
            <img className="about-img" src={aboutImgUrl} alt="about" />
            <h1 className={`about-heading ${aboutDarkClassName}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
