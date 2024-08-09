import { logic } from '../../cor/index.js'

export default (req, res, next) => {
    const { userId } = req

    const { postId } = req.params

    try {
        debugger
        logic.toggleFavPost(userId, postId)
            .then(() => res.status(204).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}