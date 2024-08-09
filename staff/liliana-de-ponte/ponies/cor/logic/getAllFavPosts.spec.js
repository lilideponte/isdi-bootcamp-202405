import 'dotenv/config'
import getAllFavPost from './getAllFavPosts.js'
import mongoose, { Types } from 'mongoose'

const { ObjectId } = Types

import { expect } from 'chai'
import { User, Post } from '../data/models.js'

import { errors } from '../../com/index.js'

const { ValidationError, NotFoundError } = errors

describe('getAllFavPost', () => {
    before(() => mongoose.connect(process.env.MONGODB_URI))

    beforeEach(() =>
        Promise.all([User.deleteMany(), Post.deleteMany()]))

    if ('succeeds on existing user', () =>
        User.create({ name: 'Samu', surname: 'Spine', email: 'samu@spine.com', username: 'samuspine', password: '123456789' })
            .then(post =>
                Post.create({ author: 'samuspine', image: 'https://media.giphy.com/media/kYNVwkyB3jkauFJrZA/giphy.gif?cid=790b7611dhp6zc5g5g7wpha1e18yh2o2f65du1ribihl6q9i&ep=v1_gifs_trending&rid=giphy.gif&ct=g', caption: 'morning' })
                    .then(user =>
                        getAllFavPost(user.id)
                            .then(() => User.findOne({ username: 'samuspine' }))
                            .then(user => expect(user.favs).to.include(post.id)
                            )
                    )
            )
    )

        it('fails on non-existing user', () => {
            let _error

            return getAllFavPost(new ObjectId().toString())
                .catch(error => _error = error)
                .finally(() => {
                    expect(_error).to.be.instanceOf(NotFoundError)
                    expect(_error.message).to.equal('user not found')

                })
        })

    it('fails on non-string userId', () => {
        let error

        try {
            getAllFavPost(123)
        } catch (_error) {
            error = _error
        } finally {
            expect(error).to.be.instanceOf(ValidationError)
            expect(error.message).to.equal('userId is not a string')
        }
    })

    afterEach(() => User.deleteMany())

    after(() => mongoose.disconnect())
})


