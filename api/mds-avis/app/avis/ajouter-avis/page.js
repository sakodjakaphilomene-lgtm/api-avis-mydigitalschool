'use client'

import { useState } from "react"

export default function AjouterAvis(){

  const [name, setName] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")
  const [message, setMessage] = useState("")


  async function envoyer(e){

    e.preventDefault()

    try {

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/add/avis`,
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,
            rating:Number(rating),
            description,
            date:new Date()
          })
        }
      )


      const data = await response.json()

      console.log(data)

      if(response.ok){
        setMessage("Avis ajouté avec succès")
        setName("")
        setRating("")
        setDescription("")
      }
      else{
        setMessage(data.error)
      }


    } catch(error){

      console.error(error)
      setMessage("Erreur serveur")

    }

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
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />


      <input
        className="border p-2"
        placeholder="Note (1 à 5)"
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
        required
      />


      <textarea
        className="border p-2"
        placeholder="Votre avis"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        required
      />


      <button
        className="bg-blue-600 text-white px-5 py-2"
      >
        Envoyer
      </button>


      <p>{message}</p>

    </form>

  )

}