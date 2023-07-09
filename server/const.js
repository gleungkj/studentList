const credentials = {
    serverUserName: 'yourUserNameHere',
    apiKey: 'yourAPIKeyHere',
    serverName: 'yourServerNameHere'
}

const mongodbURI = `mongodb+srv://${credentials.serverUserName}:${credentials.apiKey}@${credentials.serverName}/?retryWrites=true&w=majority`

module.exports = { credentials, mongodbURI }