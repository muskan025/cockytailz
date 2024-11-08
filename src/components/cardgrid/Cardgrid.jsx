import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../card/Card'
import { BiSolidCloud } from 'react-icons/bi'
import styles from './Cardgrid.module.css'

const Cardgrid = ({ favouriteList, searchQuery }) => {

    const [drinks, setDrinks] = useState(favouriteList || [])

    function filterDrinks(query) {
        console.log(query)
        const filteredList = drinks.filter((drink) => (drink.strGlass.toLowerCase()).includes(searchQuery?.toLowerCase()))
        console.log('filteredList', filteredList)
        setDrinks(filteredList)
    }

    function findDrinkkeys(drink, specificKey) {
        let drinkKeys = []
        for (const key in drink) {
            if (key.includes(specificKey)) {
                drinkKeys.push(drink[key]);
            }
        }
        return drinkKeys
    }

    async function fetchAPI() {
        const url = "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        try {
            const response = await axios.get(url)

            if (response.status === 200) {
                setDrinks(response.data.drinks)
            }
            else {
                console.log(response?.error)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (searchQuery) filterDrinks()
        else if (!favouriteList) fetchAPI()
    }, [searchQuery])



    return (
        <section className={styles.cardgrid}>
            {
                drinks.length > 0 ? (drinks.map((drink) => {
                    const { idDrink, strDrinkThumb, strGlass } = drink

                    const ingredients = favouriteList ? drink?.ingredients : findDrinkkeys(drink, 'Ingredient')
                    const instructions = favouriteList ? drink?.instructions : findDrinkkeys(drink, 'Instructions')
                    const drinkData = {
                        idDrink,
                        strDrinkThumb,
                        strGlass,
                        ingredients: ingredients,
                        instructions: instructions
                    }

                    return <Card key={idDrink} drinkData={drinkData} />
                })
                ) :
                    (<div className={styles.emptyList}>
                        <BiSolidCloud/>
                        <span>No Drinks Found</span>
                    </div>)
            }

        </section>
    )
}

export default Cardgrid
