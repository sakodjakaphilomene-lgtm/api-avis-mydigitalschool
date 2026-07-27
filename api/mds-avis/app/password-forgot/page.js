'use client'

import { useState } from 'react'
import { forgotPassword } from '@/service/password-forgot'

export default function PasswordForgotPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await forgotPassword(email)
      setMessage(data.message)
    } catch (error) {
      setMessage(error.message)
    }
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
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-indigo-600 p-2 text-white"
        >
          Envoyer
        </button>

        {message && (
          <p className="mt-4 text-center">
            {message}
          </p>
        )}
      </form>
    </div>
  )
}