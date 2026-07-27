export async function forgotPassword(email) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/forgot-password`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error)
  }

  return data
}