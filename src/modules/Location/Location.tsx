import "./Location.css"
import googleMapsIcon from "../../assets/location/google-maps.png"
import wazeIcon from "../../assets/location/waze.png"
import locationImage from "../../assets/location/location.png"

const Location = () => {
  return (
    <section className="location">
      <div className="location-container">
        <h1 className="location-title">¿Cómo llegar?</h1>
        <p className="location-place">
            La Casa del Lago, Amatitlán
        </p>

        <div className="location-links">
            <p className="location-links-title">
                Presiona para ver ubicación en
            </p>

            <div className="location-links-icons">
                <a
                href="https://maps.app.goo.gl/MFBHxkQwWz5SDmaC7?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
                >
                <img src={googleMapsIcon} alt="Google Maps" />
                <span>Maps</span>
                </a>

                <a
                href="https://waze.com/ul/h9fxd567ye"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
                >
                <img src={wazeIcon} alt="Waze" />
                <span>Waze</span>
                </a>
            </div>

            <img
                src={locationImage}
                alt="Ilustración de La Casa del Lago"
                className="location-illustration"
            />
        </div>

        {/* Contenido va aquí después */}
      </div>
    </section>
  )
}

export default Location
