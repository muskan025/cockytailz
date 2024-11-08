import { Link } from 'react-router-dom'
import styles from "./Header.module.css"
import { FaStar } from 'react-icons/fa'

const Header = () => {
  return (
    <nav>       
      <Link to="/" className={styles.brandname}>CockyTailz.</Link>
      <Link to="/favourites"><FaStar/><span>Favourites</span></Link>
    </nav>
  )
}

export default Header
