import "./Invitation.css"
import { motion } from "framer-motion"
import cardImage from "../../assets/invitation/card.png"
import rsvpImage from "../../assets/invitation/rsvp.png"

const Invitation = () => {
  return (
    <section className="invitation">
      <div className="invitation-card-wrapper">
        {/* Carta */}
        <motion.img
          src={cardImage}
          alt="Wedding Invitation Card"
          className="invitation-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* RSVP */}
        <motion.img
          src={rsvpImage}
          alt="RSVP Information"
          className="invitation-rsvp"
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  )
}

export default Invitation
