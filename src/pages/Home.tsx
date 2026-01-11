import Carousel from "../modules/Carousel/Carousel"
import Countdown from "../modules/Countdown/Countdown"
import DressCode from "../modules/DressCode/DressCode"
import Gifts from "../modules/Gifts/Gifts"
import Hero from "../modules/Hero/Hero"
import Invitation from "../modules/Invitation/Invitation"
import Location from "../modules/Location/Location"

const Home = () => {
  return (
    <>
      <Hero />
      <Invitation />
      <section id="gifts">
        <Gifts />
      </section>
      <Carousel />
      <DressCode />
      <Location />
      <Countdown />
    </>
  )
}

export default Home
