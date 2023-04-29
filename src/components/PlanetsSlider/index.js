// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const options = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  }
  return (
    <div className="planet-slider-component">
      <h1>Planets</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...options}>
          {planetsList.map(eachPlanet => {
            const {id} = eachPlanet
            return <PlanetItem key={id} planetDetails={eachPlanet} />
          })}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetSlider
