module.exports = (req, res, next) => {

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      error: "Email et mot de passe obligatoires"
    })
  }

  if (!email.includes('@')) {
    return res.status(400).json({
      error: "Email invalide"
    })
  }

  if (password.length < 8) {
    return res.status(400).json({
      error: "Mot de passe trop court"
    })
  }

  next()

}