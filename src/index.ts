import { Client, Events, GatewayIntentBits, Message } from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.once(Events.ClientReady, async (readyClient) => {
    console.log("Client ready!")
})

client.on(Events.MessageCreate, async (message: Message) => {
    console.log("received message: ", message.content)
})

const api_token = process.env.DISCORD_API_TOKEN

if (!api_token) {
    console.log("failed to get token")
    process.exit(1)
}

await client.login(api_token)
