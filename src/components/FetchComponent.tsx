import { useEffect, useState } from "react"
const URL = ""

const FetchComponent = function () {
const [item, setItems] = useState([])
useEffect(() => {

}, [])

const getItems = () => {
fetch(URL)
.then(response =>{
    if(response.ok){
        return response.json()} else {throw new Error('Problema nel recupero dei dati')}

})

}

}
export default FetchComponent