
import models from '../../models/models'
import dbConnect from '../../lib/dbconnect'

export default async function handler(req, res) {
    if (req.method != 'POST') {
        return res.status(404).json({ error: 'Bad request'})
    } else {
        const user = new models.User(req.body)
        try {
            await dbConnect()
            await user.save()
            return res.status(201).json({ message: 'User has been created' })
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
}
