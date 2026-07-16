'use client'

import { useEffect, useState } from 'react'

export default function AvisPage() {
  const [avis, setAvis] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/avis')
      .then((response) => response.json())
      .then((data) => setAvis(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Avis MyDigitalSchool
      </h1>

      <div className="space-y-4">
        {avis.map((item) => (
          <div
            key={item.id}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h2 className="text-xl font-bold">
              {item.name}
            </h2>

            <p className="mt-2 text-gray-700">
              {item.description}
            </p>

            <p className="mt-2 font-semibold text-yellow-500">
              Note : {item.rating}/5
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {item.approved ? '✅ Approuvé' : '⏳ En attente'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}