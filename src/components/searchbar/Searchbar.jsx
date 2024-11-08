import React, { useEffect, useState } from 'react'
import styles from './Searchbar.module.css'
import { BiSolidError } from 'react-icons/bi'

const Searchbar = ({searchQuery,setSearchQuery}) => {

  const [error,setError] = useState('')


  function validateQuery(query){
    const queryValue = Number(query);
    if (isNaN(queryValue) || query === '') {
      if (query.length > 1) {
        setError('Only one letter allowed');
        return false;
      }

    } else {
      setError('Only alphabet allowed');
      return false;
    }
    return true
  }

  function handleChange(e){
    setError('')

    const query = e.target.value
    const isValid = validateQuery(query)
 
     if(isValid){
      setSearchQuery(query)
     }
     else{
      setSearchQuery('')
     }
  }

  function handleSubmit(e){
    e.preventDefault()
  }

 
  return (
     <section className={styles.searchbar} >
      <form onSubmit={handleSubmit} >
            <input type="text" name='searchQuery' id='searchQuery' placeholder='Search for cocktails here...' value={searchQuery} onChange={handleChange}/>
      </form>
      {error && <div className={styles.error}>
        <BiSolidError/>
        <span>{error}</span>
        </div>
        }
      </section>
  )
}

export default Searchbar
