import { Message } from 'discord.js'
import type { KeywordHandler } from '../types/Handler'
import { promptGemini } from '../composables/gemini'

const periods = ["Cretaceous", "Jurassic", "Triassic", "Permian", "Carboniferous", "Devonian", "Silurian", "Ordovician", "Paleogene", "Neogene"]
const dietType = ["carinivorous", "non-carnivorous", "omnivorous"]
const locomotion = ["terrestrial", "acquatic", "avian"]

function getRandomIndex(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

const buildPrompt = (): string => {
    const randomPeriod = periods[getRandomIndex(0, periods.length)]
    const randomDietType = dietType[getRandomIndex(0, dietType.length)]
    const randomLocomotion = locomotion[getRandomIndex(0, locomotion.length)]

    return `Give me a fact about a ${randomLocomotion} ${randomDietType} species from the ${randomPeriod} era`
}

const dinosaurFact = async (message: Message): Promise<void> => {
    const geminiResponse = await promptGemini(buildPrompt());

    await message.reply(geminiResponse)
}

export const dinosaurFactHandler: KeywordHandler = {
    keyword: "!fact",
    action: dinosaurFact
}
