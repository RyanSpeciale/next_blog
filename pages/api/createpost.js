import mongoose from 'mongoose'
import models from '../../models/models'

export default function handler(req, res) {
  res.status(200).json({ message: 'This is a message' })
}


