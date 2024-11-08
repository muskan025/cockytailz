import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import Modal from '../modal/Modal'
import CardModal from '../cardModal/CardModal'
import { FaStar } from 'react-icons/fa'

const Card = ({drinkData}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)
  const {idDrink,
    strDrinkThumb,
    strGlass} = drinkData

    useEffect(() => {
      const favourites = JSON.parse(localStorage.getItem("drinks") || "[]")
      const isInFavorites = favourites.some(item => item.idDrink === idDrink)
      setIsFavourite(isInFavorites)
    }, [idDrink]) 


  function handleFavourites(e){
    e.stopPropagation()
    setIsFavourite(!isFavourite) 
  }

  function handleLocalStorage(){

    let favourites = JSON.parse(localStorage.getItem("drinks") || "[]")
 
    if(isFavourite){
      favourites = [...favourites,drinkData]
    }
    else{
      favourites = favourites.filter(item => item.idDrink !== idDrink)
    }
    localStorage.setItem("drinks",JSON.stringify(favourites))
  }

  useEffect(()=>{
    handleLocalStorage()
  },[isFavourite])

  return (
    <>
      <div className={styles.card} onClick={()=>setIsModalOpen(true)}>
        <FaStar className={styles.star} style={{color:isFavourite?'yellow':''}} onClick={handleFavourites}/>
        <div className={styles.circle} >
          <img src={strDrinkThumb} alt={strGlass} />
        </div>
        <h2 className={styles.name}>{strGlass}</h2>
      </div>

      {
        isModalOpen && 
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <CardModal drinkData={drinkData} handleFavourites={handleFavourites} isFavourite={isFavourite}/>
        </Modal>
      }
    </>

  )
}

export default Card
