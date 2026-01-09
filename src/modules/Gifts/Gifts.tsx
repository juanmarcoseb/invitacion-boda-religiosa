import { useEffect, useRef } from "react"
import "./Gifts.css"

import background from "../../assets/gifts/background.png"
import bow from "../../assets/gifts/bow.png"
import cemacoBtn from "../../assets/gifts/cemaco.png"
import maxBtn from "../../assets/gifts/max.png"

const Gifts = () => {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible")
          observer.disconnect() // se anima solo una vez
        }
      },
      {
        threshold: 0.3, // cuando ~30% del módulo sea visible
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="gifts"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="gifts-card">
        <img src={bow} alt="Decorative bow" className="gifts-bow" />

        <div className="gifts-content">
          <h2 className="gifts-title">Mesa de Regalos</h2>

          <p className="gifts-text">
            Tu compañía es el mejor regalo que podríamos recibir, pero si deseas darnos
            un obsequio, te dejamos nuestra lista de regalos.
          </p>

          <div className="gifts-buttons">
            <a
              href="https://www.cemaco.com/list/bodamarcosynatalia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cemacoBtn} alt="Cemaco" />
            </a>

            <a
              href="https://www2.max.com.gt/bodas/index/regalos/boda/42676/pareja/escobar-gatica/fecha/15-03-2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={maxBtn} alt="Max" />
            </a>
          </div>
        </div>

        {/* Contenido va aquí después */}
      </div>
    </section>
  )
}

export default Gifts
