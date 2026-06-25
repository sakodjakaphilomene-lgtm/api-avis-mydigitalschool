module.exports = (req, res, next) => {

  const { email, newPassword } = req.body

  if (!email || !newPassword) {
    return res.status(400).json({
      error: "Champs obligatoires"
    })
  }

  if (newPassword.length < 8) {
    return res.status(400).json({
      error: "Mot de passe trop court"
    })
  }

  next()

}