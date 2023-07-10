const credentials = require('./credentials')

const mongodbURI = `mongodb+srv://${credentials.serverUserName}:${credentials.apiKey}@${credentials.serverName}/?retryWrites=true&w=majority`

module.exports = mongodbURI