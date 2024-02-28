import TravellerExpCaraousel from "./TravellerExpCaraousel"
import styles from "../styles/TravellerExpirience.module.css"

const TravellerExpirience = () => {
  return (
    <section className="travellerExp" id="travellerexp">
      <div className={`${styles.subHeadText}`}>
        Traveller’s Experiences
      </div>
      <div className={`${styles.carousel}`}>
        <TravellerExpCaraousel />
      </div>
    </section>
  )
}

export default TravellerExpirience
