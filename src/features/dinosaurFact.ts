import { Message } from 'discord.js'
import type { KeywordHandler } from '../types/Handler'
import { promptGemini } from '../composables/gemini'
import { getRandomIndex } from '../utils/array'
import { DIET_TYPE, PREHISTORIC_PERIODS, SPECIES_LOCOMOTION } from '../constants/dinosaurData'

const buildPrompt = (): string => {
    const randomPeriod = PREHISTORIC_PERIODS[getRandomIndex(0, PREHISTORIC_PERIODS.length)]
    const randomDietType = DIET_TYPE[getRandomIndex(0, DIET_TYPE.length)]
    const randomLocomotion = SPECIES_LOCOMOTION[getRandomIndex(0, SPECIES_LOCOMOTION.length)]

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
