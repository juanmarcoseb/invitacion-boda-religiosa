import Carousel from "../modules/Carousel/Carousel"
import Countdown from "../modules/Countdown/Countdown"
import Gifts from "../modules/Gifts/Gifts"
import Hero from "../modules/Hero/Hero"
import Invitation from "../modules/Invitation/Invitation"

const Home = () => {
  return (
    <>
      <Hero />
      <Invitation />
      <Carousel />
      <Gifts />
      <Countdown />
    </>
  )
}

export default Home
