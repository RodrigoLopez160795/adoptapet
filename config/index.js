module.exports = {
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
    mongo : {
        uri: process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : 'mongodb+srv://User:34PcU5HtHEv6q0mG@cluster0.xhkcc.mongodb.net/users_database?retryWrites=true&w=majority'
    }
}

