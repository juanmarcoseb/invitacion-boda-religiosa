import "./Carousel.css"

import img1 from "../../assets/carousel/photo-01.webp"
import img2 from "../../assets/carousel/photo-02.webp"
import img3 from "../../assets/carousel/photo-03.webp"
import img4 from "../../assets/carousel/photo-04.webp"
import img5 from "../../assets/carousel/photo-05.webp"
import img6 from "../../assets/carousel/photo-06.webp"
import img7 from "../../assets/carousel/photo-07.webp"
import img8 from "../../assets/carousel/photo-08.webp"
import img9 from "../../assets/carousel/photo-09.webp"
import img10 from "../../assets/carousel/photo-10.webp"

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
]

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="carousel-viewport">
        <div className="carousel-track">
          {images.concat(images).map((img, i) => (
            <div className="carousel-item" key={i}>
              <img src={img} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>


  )
}

export default Carousel
