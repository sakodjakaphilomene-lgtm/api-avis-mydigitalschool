'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function ModifierAvis() {
  const { id } = useParams()
  const router = useRouter()

  const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/avis/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name)
        setRating(data.rating)
        setDescription(data.description)
      })
  }, [id])

 async function modifier(e) {
  e.preventDefault()

  try {

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/avis/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          rating: Number(rating),
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      alert(data.error)
      return
    }

    alert(data.message)
    router.push("/avis")

  } catch (error) {

    console.error(error)
    alert("Erreur lors de la modification")

  }
}



  return (
    <form
      onSubmit={modifier}
      className="p-10 space-y-4"
    >
      <h1 className="text-3xl font-bold">
        Modifier un avis
      </h1>

      <input
        className="border p-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <textarea
        className="border p-2 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Enregistrer
      </button>
    </form>
  )
}