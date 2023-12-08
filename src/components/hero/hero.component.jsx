import HomeBg from "../../assets/bg.svg"
import { Button } from "../components"

export default function Hero() {
  return (
        <div className="hero-container">
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
      </div>
  )
}
