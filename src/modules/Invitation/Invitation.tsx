import { motion } from "framer-motion"
import "./Invitation.css"
import couplePhoto from "../../assets/invitation/couple.jpg"

const Invitation = () => {
  return (
    <section className="invitation">
      <div className="invitation-container">

        {/* Foto */}
        <motion.div
          className="invitation-image"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={couplePhoto} alt="Marcos y Naty" />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="invitation-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Let’s celebrate love,
            <br />
            laughter,
            <br />
            and happily ever after!
          </h2>

          <p className="invitation-text">
            Con la bendición de Dios y de nuestras familias,
            nosotros, Marcos y Naty,
            les invitamos a compartir con nosotros la alegría de unir 
            nuestras vidas en matrimonio.
            <br /><br />
            Domingo,
            <br />
            15 de marzo de 2026
            <br />
            Ceremonia: 3:00 p. m.
            <br />
            Lugar: La Casa Del Lago Amatitlán
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Invitation
