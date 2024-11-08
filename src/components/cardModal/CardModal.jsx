import React from 'react'
import styles from './CardModal.module.css'

const CardModal = ({drinkData,handleFavourites,isFavourite}) => {

    const {strDrinkThumb,strGlass, ingredients, instructions} = drinkData
    
  
    return (
        <section className={styles.cardmodal}>
            <div className={styles.image}>
                <img src={strDrinkThumb} alt={strGlass} />
            </div>
            <p className={styles.drinkname}>{strGlass}</p>
             <div className={styles.list}>
                <p className={styles.listname}>Ingredients</p>
                <ul>{
                    ingredients.length > 0 &&
                    ingredients.map((item, id) => {
                        return item && <li key={id}>{item}</li>
                    }
                    )
                }</ul>
            </div>

            <div className={styles.list}>
                <p className={styles.listname}>Instructions</p>
                <ul>{
                    instructions.length > 0 &&
                    instructions.map((item, id) => {
                        return item && <li key={id}>{item}</li>
                    }
                    )
                }
                </ul>
            </div>
           
            <button onClick={handleFavourites}>{isFavourite ? 'Remove from favourites' : 'Add to favourites'}</button>
        </section>
    )
}

export default CardModal
