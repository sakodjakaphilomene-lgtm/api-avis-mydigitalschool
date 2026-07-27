'use client'

import { useState } from 'react'
import { resetPassword } from '@/service/password-reset'

export default function PasswordReset() {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')

  async function changer(e) {
    e.preventDefault()

    try {
      const data = await resetPassword(email, newPassword)
      setMessage(data.message)
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={changer}
        className="bg-white p-8 rounded-xl shadow space-y-4 w-96"
      >
        <h1 className="text-2xl font-bold text-center">
          Réinitialiser le mot de passe
        </h1>
<a
  href="/avis/ajouter-avis"
  className="mb-6 inline-block rounded bg-blue-600 px-4 py-2 text-white"
>
  Ajouter un avis
</a>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded"
        >
          Modifier
        </button>

        {message && (
          <p className="text-center">
            {message}
          </p>
        )}
      </form>
    </div>
  )
}