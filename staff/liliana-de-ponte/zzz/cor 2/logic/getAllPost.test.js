import getAllPosts from './getAllPosts.js'

const posts = getAllPosts('lilideponte', (error, posts) => {
    if (error) {
        console.error(error)

        return
    }

    console.log(posts)
})