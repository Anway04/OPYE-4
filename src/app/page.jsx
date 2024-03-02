import HottestDeals from '@/components/HottestDeals'
import Landing from '@/components/Landing'

import PopularDest from '@/components/PopularDest'
import SimpleSlider from '@/components/SimpleSlider'
import TravellerExpirience from '@/components/TravellerExpirience'


const Home = () => {
  return (
    <section className="home" id="home">
      <Landing />
      <PopularDest />
      <TravellerExpirience />
      <HottestDeals />
      

    </section>
)
}

export default Home
