'use client'

import {useState} from "react"

export default function AjouterAvis(){

const [name,setName] = useState("")
const [description,setDescription] = useState("")
const [rating,setRating] = useState("")


async function envoyer(e){

e.preventDefault()

await fetch("http://localhost:5000/add/avis",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
description,
rating:Number(rating)
})
})

alert("Avis envoyé")

}


return (

<form onSubmit={envoyer} className="p-10 space-y-4">

<h1 className="text-2xl font-bold">
Ajouter un avis
</h1>

<input 
className="border p-2"
placeholder="Nom"
onChange={(e)=>setName(e.target.value)}
/>

<input 
className="border p-2"
placeholder="Note"
onChange={(e)=>setRating(e.target.value)}
/>

<textarea
className="border p-2"
placeholder="Votre avis"
onChange={(e)=>setDescription(e.target.value)}
/>

<button className="bg-blue-600 text-white px-4 py-2">
Envoyer
</button>

</form>

)

}