'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { register } from '../service/register'

export default function Register() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await register(email, password)
      setMessage(data.message)

      setTimeout(() => {
        router.push('/')
      }, 1000)

    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-96 space-y-4 rounded-lg bg-zinc-900 p-6"
      >
        <h1 className="text-2xl font-bold text-white">
          Inscription
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full rounded p-2"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full rounded p-2"
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-indigo-600 p-2 text-white"
        >
          inscription
        </button>

        {message && (
          <p className="text-center text-white">{message}</p>
        )}
      </form>
    </div>
  )
}