'use client'

import { useState } from 'react'

export default function PasswordForgotPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Lien envoyé')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow"
      >
        <h1 className="mb-6 text-center text-2xl font-bold">
          Mot de passe oublié
        </h1>

        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded border p-2"
        />

        <button
          type="submit"
          className="w-full rounded bg-indigo-600 p-2 text-white"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}