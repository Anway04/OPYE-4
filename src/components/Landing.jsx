import Search from "./Search"
import SearchButton from "./SearchButton"
import styles from "../styles/Landing.module.css"

const Landing = () => {
  return (
    <section className={`${styles.home}`} id="home">
      <div className={`${styles.head_text} font-bold text-[100px] sm:font-medium sm:text-[17vh]`}>
        OPYE
      </div>
      <div className={`${styles.sub_text} w-[220px] font-light text-[26px] sm:text-[6.2vh] sm:w-[800px]`}>
        <p>Our Planning Your Experience</p>
      </div>
      <div className={`${styles.desc} font-light text-[16px] w-[350px] sm:w-[750px] sm:font-light sm:text-[22px]`}>
        <p>
          Are you ready to embark on the adventure of a lifetime? At Our Planning Your Experience, we believe that travel is more than just a journey; it's a way to create lasting memories, discover new cultures, and enrich your life.
        </p>
      </div>
      <div className={`${styles.search} flex flex-col gap-y-2 items-center sm:flex-row`}>
        <Search />
        <SearchButton />
      </div>
    </section>
  )
}

export default Landing