import { useEffect, useState } from 'react'

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