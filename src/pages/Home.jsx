import { useState } from 'react'
import Searchbar from '../components/searchbar/Searchbar'
import Cardgrid from '../components/cardgrid/Cardgrid'

const Home = () => {

  const [searchQuery,setSearchQuery] = useState('')

  return (
    <main>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Cardgrid searchQuery={searchQuery}/>
    </main>
  )
}

export default Home
