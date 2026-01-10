import { useEffect, useRef } from "react"
import "./Location.css"
import googleMapsIcon from "../../assets/location/google-maps.png"
import wazeIcon from "../../assets/location/waze.png"
import locationImage from "../../assets/location/location.png"

const Location = () => {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible")
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="location" ref={sectionRef}>
      <div className="location-container">
        <h1 className="location-title animate">¿Cómo llegar?</h1>

        <p className="location-place animate delay-1">
          La Casa del Lago, Amatitlán
        </p>

        <div className="location-links">
          <p className="location-links-title animate delay-2">
            Presiona para ver ubicación en
          </p>

          <div className="location-links-icons">
            <a
              href="https://maps.app.goo.gl/MFBHxkQwWz5SDmaC7?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link animate delay-3"
            >
              <img src={googleMapsIcon} alt="Google Maps" />
              <span>Maps</span>
            </a>

            <a
              href="https://waze.com/ul/h9fxd567ye"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link animate delay-4"
            >
              <img src={wazeIcon} alt="Waze" />
              <span>Waze</span>
            </a>
          </div>

          <img
            src={locationImage}
            alt="Ilustración de La Casa del Lago"
            className="location-illustration animate delay-5"
          />
        </div>
      </div>
    </section>
  )
}

export default Location
