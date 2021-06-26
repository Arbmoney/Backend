import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  private async createUser(hash: string) {}

  public async index({ response }: HttpContextContract) {
    return response.status(200).send({ data: 'wtf' })
  }

  public async store({ response }: HttpContextContract) {
    const data = JSON.stringify(new Date()).toString()
    const hash = Buffer.from(data).toString('base64')

    try {
      const db = await User.create({ hash: hash })

      return response.status(200).json(db)
    } catch (err) {
      if (err.detail === `Key (hash)=(${hash}) already exists.`) {
        const hashNew = Buffer.from(
          `${hash}${Math.floor(Math.random() * Math.floor(Math.random() * 8000))}`
        ).toString('base64')
        const db = await User.create({ hash: hashNew })

        return db
      }
    }
  }
}
