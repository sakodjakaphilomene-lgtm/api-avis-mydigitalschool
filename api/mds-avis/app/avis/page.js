'use client'

import {useEffect, useState} from "react"

export default function Avis(){

const [avis,setAvis] = useState([])


useEffect(()=>{

fetch("http://localhost:5000/avis")
.then(res=>res.json())
.then(data=>setAvis(data))

},[])


  return (
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
  )
}