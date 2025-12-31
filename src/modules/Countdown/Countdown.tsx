import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "./Countdown.css"
import backgroundImage from "../../assets/countdown/background.jpg"

const targetDate = new Date("2026-03-15T15:00:00")

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  function getTimeRemaining() {
    const now = new Date().getTime()
    const distance = targetDate.getTime() - now

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="countdown"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="countdown-overlay">
        <motion.h2
          className="countdown-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          START THE COUNTDOWN
        </motion.h2>

        <motion.div
          className="countdown-timer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TimeBlock value={timeLeft.days} label="Días" />
          <TimeBlock value={timeLeft.hours} label="Horas" />
          <TimeBlock value={timeLeft.minutes} label="Minutos" />
          <TimeBlock value={timeLeft.seconds} label="Segundos" />
        </motion.div>
      </div>
    </section>
  )
}

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="time-block">
    <span className="time-value">{String(value).padStart(2, "0")}</span>
    <span className="time-label">{label}</span>
  </div>
)

export default Countdown
