import React, { useEffect, useState } from 'react'
import SingleProduct from '../SingleProduct'

const useCurrency = (currency) => {
    let [activeCurrency, setActiveCurrency] = useState()

    useEffect(() => {
        setActiveCurrency(activeCurrency = currency)        
    }, [currency])
  return (
    activeCurrency
  )
}

export default useCurrency