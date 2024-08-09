import data from '../data/index.js'

import validate from '../validate.js'

function toggleFollowUser(username, targetUsername, callback) {
    validate.username(username)
    validate.username(targetUsername, 'targetUserName')
    validate.callback(callback)

    data.users.findOne({ username })
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            data.users.findOne({ username: targetUsername })
                .then(targetUser => {
                    if (!targetUser) {
                        callback(new Error('targeUser not found'))

                        return
                    }

                    const { following } = user

                    const index = following.indexOf(targetUsername)

                    if (index < 0)
                        following.push(targetUsername)
                    else
                        following.splice(index, 1)

                    data.users.updateOne({ username }, { $set: { following } })
                        .then(() => callback(null))
                        .catch(error => callback(new Error(error.message)))
                })
                .catch(error => callback(new Error(error.message)))

        })
        .catch(error => callback(new Error(error.message)))
}

export default toggleFollowUser