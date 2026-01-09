import Carousel from "../modules/Carousel/Carousel"
import Countdown from "../modules/Countdown/Countdown"
import DressCode from "../modules/DressCode/DressCode"
import Gifts from "../modules/Gifts/Gifts"
import Hero from "../modules/Hero/Hero"
import Invitation from "../modules/Invitation/Invitation"

const Home = () => {
  return (
    <>
      <Hero />
      <Invitation />
      <Gifts />
      <Carousel />
      <DressCode />
      <Countdown />
    </>
  )
}

export default Home
