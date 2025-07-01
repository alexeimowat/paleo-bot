import { Message } from 'discord.js'

export interface KeywordHandler {
    keyword: string, // key word to look for (case-insensive)
    action: (message: Message) => Promise<void> // function to call
}
