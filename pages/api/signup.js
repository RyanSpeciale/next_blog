import mongoose from 'mongoose'
import models from '../../models/models'

export default function handler(req, res) {
    if (req.method != 'POST') {
        return res.status(404).json({ error: 'Bad request'})
    } else {
        const user 
    }
}
