import "./ColorModal.css"

import left1 from "../../../assets/dresscode/color-2/left-1.png"
import left2 from "../../../assets/dresscode/color-2/left-2.png"
import left3 from "../../../assets/dresscode/color-2/left-3.png"

import right1 from "../../../assets/dresscode/color-2/right-1.png"
import right2 from "../../../assets/dresscode/color-2/right-2.png"
import right3 from "../../../assets/dresscode/color-2/right-3.png"

const ColorModal2 = () => {
  return (
    <div className="color-modal">
      {/* Carrusel izquierdo */}
      <div className="carousel vertical up">
        <div className="carousel-track">
          {[left1, left2, left3, left1, left2, left3].map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>

      {/* Carrusel derecho */}
      <div className="carousel vertical down">
        <div className="carousel-track">
          {[right1, right2, right3, right1, right2, right3].map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorModal2
