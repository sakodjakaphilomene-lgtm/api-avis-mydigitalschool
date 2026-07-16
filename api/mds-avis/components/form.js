

'use client'

import { useState } from 'react'
import { login } from '../service/login'
import { useRouter } from 'next/navigation'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

  const data = await login(email, password)

  console.log(data)

  router.push('/avis')

}
catch (error) {
      setMessage('Erreur de connexion')
      console.error(error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col justify-center bg-black px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="MyDigitalSchool"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />

        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Connexion MyDigitalSchool Avis
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-100"
            >
              Adresse email
            </label>

            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-100"
              >
                Mot de passe
              </label>

              <a
                href="/password-forgot"
                className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Se connecter
            </button>
          </div>

          {message && (
            <p className="text-center text-white">
              {message}
            </p>
          )}
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Pas encore de compte ?{' '}
          <a
            href="/register"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            inscrivez-vous
          </a>
        </p>
      </div>
    </div>
  )
}