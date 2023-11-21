const tmi = require('tmi.js')

const {username, password, channel} = require('./settings.json');

const sauce = [388021, 386058, 121261, 87390, 337813, 290822]

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
})
client.on('message', async (channel, user, message, self) => {
    if(self) {
        return
    }
    if (message=="!hello") {
        await client.say(channel, `hello @${user.username}`);
        return
    }
    if (message == "!github") {
        await client.say(channel, "https://www.github.com/dinokage");
        return
    }
    if (message == "!discord") {
        await client.say(channel, "https://discord.gg/9wPqg5vE4m")
        return
    }
    if (message == "!ping") {
        await client.say(channel, "pong");
        return
    }
    if (message == "!sauce") {
    await client.say(channel, `${sauce[Math.floor(Math.random()*sauce.length)]}`)
    }
    console.log(message)
})