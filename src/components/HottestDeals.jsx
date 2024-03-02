import DealsCardFrame from "./DealsCardFrame"
import styles from "../styles/HottestDeals.module.css"

const HottestDeals = () => {
  return (
    <section className="pop_dest" id="pop_dest">
      <div className={`${styles.subheadText}`}>
        Hottest Deals
      </div>
      <div className={`${styles.deal}`}>
        <DealsCardFrame/>
      </div>
    </section>
  )
}

export default HottestDeals
