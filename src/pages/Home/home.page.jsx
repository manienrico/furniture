import HomeBg from "../../assets/bg.svg"
import { Button, HeroSection } from "../../components/components"

import './home.styles.css'

export default function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      {/* <div className="hero-container">
        <div className="bg-container">
          <img src={HomeBg} alt="scandinavian-interior-mockup-wall-decal-background"/>
        </div>
        <div className="hero-text-container">
          <div className="hero-text-innerContain">
            <h5>New Arrival</h5>
            <h1>Discover Our<br/> New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="inner-btn">
              <Button>BUY NOW</Button>
            </div>
          </div>
        </div>
      </div> */}
      <section className="">
        <div className="browse-range-head">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
