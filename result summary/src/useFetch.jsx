import { useEffect, useState } from "react"

const useFetch = (url)=>{
    const [results,setResults] = useState([])
    const [error,setError] = useState(null)
    useEffect(()=>{
        fetch(url)
         .then((res)=>res.json())
         .then((data)=>{
            setResults(data)
         })
         .catch(err=>{
            setError(err)
         })
    },[url])
    
    return {results,error}
}

export default useFetch;