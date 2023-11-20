const tmi = require('tmi.js')

const {username, password, channel} = require('./settings.json');

const options = {
    options: {debug: true},
    connection: {reconnect: true, secure: true},
    identity: {
        username, password
    },
    channels:[channel]

};

const client = new tmi.Client(options)
client.connect().catch(console.error)

client.on('connected' , async () => {
    console.log("connected to stream");
    await client.say(channel, "holo")
})
client.on('message', async (channel, user, message, self) => {
    if(self) {
        return
    }
    if (message=="!hello") {
        await client.say(channel, `hello @${user.username}`);
    }
    await console.log(message)
})