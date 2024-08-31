import { User, Event } from '../data/models.js'

import { validate, errors } from '../../com/index.js'

const { NotFoundError, SystemError } = errors

export default (userId, title, organizer, date, duration, description, image, location, address, city) => {
    validate.string(userId, 'userId')
    validate.string(title, 'title')
    validate.date(date, 'date')
    validate.string(organizer, 'organizer')
    validate.string(duration, 'duration')
    validate.string(description, 'description')
    validate.string(city, 'city')
    validate.string(address, 'address')
    validate.url(image, 'image')
    validate.location(location, 'location')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Event.create({
                title,
                organizer,
                date: new Date(date),
                duration,
                description,
                image,
                location,
                address,
                city,
                author: userId

            })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(() => { })
}
