import { useState } from "react"
import "./DressCode.css"

import ColorModal1 from "./modals/ColorModal1"
import ColorModal2 from "./modals/ColorModal2"
import ColorModal3 from "./modals/ColorModal3"
import ColorModal4 from "./modals/ColorModal4"
import ColorModal5 from "./modals/ColorModal5"
import ColorModal6 from "./modals/ColorModal6"

const DressCode = () => {
  const [activeColor, setActiveColor] = useState<string | null>(null)

  const renderModalContent = () => {
    switch (activeColor) {
        case "color-1":
        return <ColorModal1 />
        case "color-2":
        return <ColorModal2 />
        case "color-3":
        return <ColorModal3 />
        case "color-4":
        return <ColorModal4 />
        case "color-5":
        return <ColorModal5 />
        case "color-6":
        return <ColorModal6 />
        default:
        return null
    }
    }


  return (
    <section className="dresscode">
      <div className="dresscode-container">
        <h2 className="dresscode-title">Código de Vestimenta</h2>

        <p className="dresscode-text">
          Formal y elegante, acorde a la ocasión.<br />
          <strong>Damas:</strong> vestido largo. Sugerimos tacón ancho debido a que la celebración se realizará en jardín.<br />
          <strong>Caballeros:</strong> smoking.
        </p>

        {/* 🎨 PALETA */}
        <div className="dresscode-palette">
          <button
            className="palette-circle color-1"
            aria-label="Inspiración color azul oscuro"
            onClick={() => setActiveColor("color-1")}
          />
          <button
            className="palette-circle color-2"
            aria-label="Inspiración color azul verdoso"
            onClick={() => setActiveColor("color-2")}
          />
          <button
            className="palette-circle color-3"
            aria-label="Inspiración color verde oscuro"
            onClick={() => setActiveColor("color-3")}
          />
          <button
            className="palette-circle color-4"
            aria-label="Inspiración color verde oliva"
            onClick={() => setActiveColor("color-4")}
          />
          <button
            className="palette-circle color-5"
            aria-label="Inspiración color café"
            onClick={() => setActiveColor("color-5")}
          />
          <button
            className="palette-circle color-6"
            aria-label="Inspiración color beige"
            onClick={() => setActiveColor("color-6")}
          />
        </div>

        <p className="dresscode-hint">
          Presiona el color de tu interés para ver inspiración
        </p>

        <p className="dresscode-note">
          Agradecemos de manera especial{" "}
          <strong>no portar vestidos en tonos blancos, claros o similares</strong>, ya
          que estos colores están reservados exclusivamente para la novia.
          <br />
          Asimismo, solicitamos evitar los colores rojo y negro.
          <br /><br />
          Hemos preparado una selección de outfits de referencia para orientar tu
          elección.
        </p>
      </div>

      {/* 🪟 MODAL */}
      {activeColor && (
        <div
          className="dresscode-modal-overlay"
          onClick={() => setActiveColor(null)}
        >
          <div
            key={activeColor}
            className="dresscode-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setActiveColor(null)}
            >
              ✕
            </button>
          
            {renderModalContent()}

          </div>
        </div>
      )}
    </section>
  )
}

export default DressCode
