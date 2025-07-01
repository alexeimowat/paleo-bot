import { Client, Events, GatewayIntentBits, Message } from 'discord.js'
import { birdDinosaurFactHandler } from './features/birdsAreNotDinosaurs'
import type { KeywordHandler } from './types/Handler'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

const handlers: KeywordHandler[] = [birdDinosaurFactHandler]

client.once(Events.ClientReady, async (readyClient) => {
    console.log("Client ready!")
})

client.on(Events.MessageCreate, async (message: Message) => {
    // ignore messages from bots
    if (message.author.bot) {
        return
    } 

    const messageContent = message.content.toLowerCase()
    for (const handler of handlers) {
        if (messageContent.includes(handler.keyword.toLowerCase())) {
            try {
                await handler.action(message)
            } catch(error) {
                return
            }
        }
    }

})

const api_token = process.env.DISCORD_API_TOKEN

if (!api_token) {
    console.log("failed to get token, exiting")
    process.exit(1)
}

await client.login(api_token)
