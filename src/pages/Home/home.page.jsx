import HomeBg from "../../assets/bg.svg"

import './home.styles.css'

export default function Home() {
  return (
    <div className="home-container">
    <div className="hero-container">
      <div className="bg-container">
        <img src={HomeBg} alt="scandinavian-interior-mockup-wall-decal-background"/>
      </div>
      <div className="hero-text-container"></div>
    </div>
    </div>
  )
}
