import { Message } from 'discord.js'
import type { KeywordHandler } from '../types/Handler'

const BIRDS_ARE_NOT_DINOSAURS = "Hey there!\n\nI noticed you mentioned birds in your message, I just wanted to take this opportunity to quickly correct a common misconception that birds *are* dinosaurs, which is wrong even if Paleontologist say so!\n Just think about it, birds don't *look* like dinosaurs, they don't roar, they aren't covered in scales etc.\n\n" +
        "You may have heard people mentioning this term 'cladistics' to help support this delusion. Basically it's like 'ok, dinosaurs and birds share a common ancestor thus birds are dinosaurs`.\n\n" +
        "But you know what? Humans also share a common ancestor known as 'LUCA' which is basically a single cell organism GOAT that lived like 3.5 billion years ago... but we can't say that humans are single cell organism cause we aren't - we're a new species entirely living billions of years later. Just like how birds are an entirely different species living millions of years later than dinosaurs!\n\n" +
        "Well, that's it for me! If you here someone say that 'birds are dinosaurs' be sure to point out their factual error!\n\nUntil next time!"

const handleBirdDinosaurFact = async (message: Message): Promise<void> => {
    await message.reply(BIRDS_ARE_NOT_DINOSAURS)
}

export const birdDinosaurFactHandler: KeywordHandler = {
    keyword: "bird",
    action: handleBirdDinosaurFact
}
