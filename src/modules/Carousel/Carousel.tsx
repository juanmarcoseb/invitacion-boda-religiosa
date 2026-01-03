import "./Carousel.css"

import img1 from "../../assets/carousel/photo-01.jpg"
import img2 from "../../assets/carousel/photo-02.jpg"
import img3 from "../../assets/carousel/photo-03.jpg"
import img4 from "../../assets/carousel/photo-04.jpg"
import img5 from "../../assets/carousel/photo-05.jpg"
import img6 from "../../assets/carousel/photo-06.jpg"
import img7 from "../../assets/carousel/photo-07.jpg"
import img8 from "../../assets/carousel/photo-08.jpg"
import img9 from "../../assets/carousel/photo-09.jpg"
import img10 from "../../assets/carousel/photo-10.jpg"

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
]

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="carousel-track">
        {/* Primera tanda */}
        {images.map((img, i) => (
          <div className="carousel-item" key={`a-${i}`}>
            <img src={img} alt={`Slide ${i + 1}`} />
          </div>
        ))}

        {/* Segunda tanda (para loop infinito) */}
        {images.map((img, i) => (
          <div className="carousel-item" key={`b-${i}`}>
            <img src={img} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Carousel
