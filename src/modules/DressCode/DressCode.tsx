import { useState, useEffect, useRef } from "react"
import "./DressCode.css"

import ColorModal1 from "./modals/ColorModal1"
import ColorModal2 from "./modals/ColorModal2"
import ColorModal3 from "./modals/ColorModal3"
import ColorModal4 from "./modals/ColorModal4"
import ColorModal5 from "./modals/ColorModal5"
import ColorModal6 from "./modals/ColorModal6"

const DressCode = () => {
  const [activeColor, setActiveColor] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const renderModalContent = () => {
    switch (activeColor) {
      case "color-1": return <ColorModal1 />
      case "color-2": return <ColorModal2 />
      case "color-3": return <ColorModal3 />
      case "color-4": return <ColorModal4 />
      case "color-5": return <ColorModal5 />
      case "color-6": return <ColorModal6 />
      default: return null
    }
  }

  return (
    <section
      ref={sectionRef}
      className={`dresscode ${isVisible ? "is-visible" : ""}`}
    >
      <div className="dresscode-container">
        <h2 className="dresscode-title">Código de Vestimenta</h2>

        <p className="dresscode-text">
          Formal y elegante, acorde a la ocasi<span className="accent-fix">ó</span>n.<br />
          <strong>Damas:</strong> vestido largo. Sugerimos tac<span className="accent-fix">ó</span>n ancho debido a que la celebraci<span className="accent-fix">ó</span>n se realizar<span className="accent-fix">á</span> en jardín.<br />
          <strong>Caballeros:</strong> smoking.
        </p>

        <div className="dresscode-palette">
          <button className="palette-circle color-1" aria-label="Inspiración color azul oscuro" onClick={() => setActiveColor("color-1")} />
          <button className="palette-circle color-2" aria-label="Inspiración color azul verdoso" onClick={() => setActiveColor("color-2")} />
          <button className="palette-circle color-3" aria-label="Inspiración color verde oscuro" onClick={() => setActiveColor("color-3")} />
          <button className="palette-circle color-4" aria-label="Inspiración color verde oliva" onClick={() => setActiveColor("color-4")} />
          <button className="palette-circle color-5" aria-label="Inspiración color café" onClick={() => setActiveColor("color-5")} />
          <button className="palette-circle color-6" aria-label="Inspiración color beige" onClick={() => setActiveColor("color-6")} />
        </div>

        <p className="dresscode-hint">
          Presiona el color de tu inter<span className="accent-fix">é</span>s para ver inspiraci<span className="accent-fix">ó</span>n
        </p>

        <p className="dresscode-note">
          Agradecemos de manera especial{" "}
          <strong>no portar vestidos en tonos blancos, claros o similares</strong>, ya
          que estos colores est<span className="accent-fix">á</span>n reservados exclusivamente para la novia.
          <br />
          Asimismo, solicitamos evitar los colores rojo y negro.
          <br /><br />
          Hemos preparado una selecci<span className="accent-fix">ó</span>n de outfits de referencia para orientar tu
          elecci<span className="accent-fix">ó</span>n.
        </p>
      </div>

      {activeColor && (
        <div className="dresscode-modal-overlay" onClick={() => setActiveColor(null)}>
          <div
            key={activeColor}
            className="dresscode-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setActiveColor(null)}>✕</button>
            {renderModalContent()}
          </div>
        </div>
      )}
    </section>
  )
}

export default DressCode
