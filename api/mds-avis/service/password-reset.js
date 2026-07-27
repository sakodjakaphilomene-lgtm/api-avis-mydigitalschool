export async function resetPassword(email, newPassword) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/reset-password`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        newPassword,
      }),
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error)
  }

  return data
}