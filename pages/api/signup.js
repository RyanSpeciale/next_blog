import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  if (method === 'POST') {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ success: user })
    } catch (err) {
      res.status(401).json({ failure: 'Unable to create' })
    }
  } else {
    res.status(403).json({ error: 'Bad request method' })
  }
}