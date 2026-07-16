'use client'

import {useState} from "react"


export default function AjouterAvis(){

const [name,setName]=useState("")
const [rating,setRating]=useState("")
const [description,setDescription]=useState("")


async function envoyer(e){

e.preventDefault()


await fetch(`${process.env.NEXT_PUBLIC_API_URL}/id/avis`, {
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
body:JSON.stringify({
name,
rating:Number(rating),
description
})
}
)


alert("Avis ajouté")

}


return (

<form 
onSubmit={envoyer}
className="p-10 space-y-4"
>

<h1 className="text-3xl font-bold">
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
placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
/>


<button
className="bg-blue-600 text-white px-5 py-2"
>
Envoyer
</button>


</form>

)

}