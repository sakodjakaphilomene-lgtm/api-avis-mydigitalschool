'use client'

import { useEffect, useState } from "react"

export default function Avis() {

  const [avis, setAvis] = useState([])
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {

  fetch(`${process.env.NEXT_PUBLIC_API_URL}/avis`)
    .then(res => res.json())
    .then(data => setAvis(data))


  setTimeout(() => {

    const user = localStorage.getItem("user")

    console.log("VERIFICATION USER :", user)

    if (user) {
      setIsLogged(true)
    }

  }, 100)

}, [])

  async function supprimer(id) {

    if (!confirm("Supprimer cet avis ?")) return

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/avis/${id}`, {
      method: "DELETE",
    })

    setAvis(avis.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-8 text-3xl font-bold">
        Liste des avis
      </h1>
      <p>
  Statut connexion : {isLogged ? "CONNECTÉ" : "NON CONNECTÉ"}
</p>
      {isLogged && (
        <button
          onClick={() => {
            localStorage.removeItem("user")
            window.location.href = "/"
          }}
          className="mr-4 mb-6 rounded bg-red-600 px-4 py-2 text-white"
        >
          Déconnexion
        </button>
      )}

      {isLogged && (
        <a
          href="/avis/ajouter-avis"
          className="mb-6 inline-block rounded bg-blue-600 px-4 py-2 text-white"
        >
          Ajouter un avis
        </a>
      )}

      <div className="space-y-4">
        {avis.map((item) => (
          <div
            key={item.id}
            className="rounded-lg bg-white p-4 shadow"
          >
            <h2 className="font-bold">
              {item.name}
            </h2>

            <p>{item.description}</p>

            <p className="text-yellow-500">
              ⭐ {item.rating}/5
            </p>

            {isLogged && (
              <div className="mt-4 flex gap-2">

                <button
                  onClick={() => window.location.href = `/avis/${item.id}`}
                  className="rounded bg-yellow-500 px-3 py-1 text-white"
                >
                  Modifier
                </button>

                <button
                  onClick={() => supprimer(item.id)}
                  className="rounded bg-red-600 px-3 py-1 text-white"
                >
                  Supprimer
                </button>

              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  )
}


  /*return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Liste des avis
      </h1>

      <div className="space-y-4">
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="font-bold">Malika</h2>
          <p>Très bonne école.</p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
        </div>

        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="font-bold">Jean</h2>
          <p>Bonne expérience globale.</p>
          <p className="text-yellow-500">⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
) } */