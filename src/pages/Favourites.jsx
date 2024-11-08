import Cardgrid from '../components/cardgrid/Cardgrid'
import { FaStar } from 'react-icons/fa'
import '../index.css'

const Favourites = () => {
  
  const favouriteList = JSON.parse(localStorage.getItem('drinks') || "[]")
  
  return (
    <main>
      {favouriteList.length > 0 ? (
        <Cardgrid favouriteList={favouriteList}/>
      ) : (
        <div className="emptyList">
          <FaStar/>
          <span>No Favourites Added</span>
        </div>
      )}
    </main>
  )
}

export default Favourites