import nextId from "react-id-generator";
import { getRandomInteger } from "./util";
import { IMAGES_COACH, NAMES_COACH, POSITION_COACH, IMAGES_PLAYER, NAMES_PLAYER, POSITION_PlAYER, DATES_PlAYER, RANK_PlAYER } from './const'


//COACH
const generateImageCoach = () => {
    const randomIndex = getRandomInteger(0, IMAGES_COACH.length - 1);
    return IMAGES_COACH[randomIndex];
}

const generateNameCoach = () => {
    const randomIndex = getRandomInteger(0, NAMES_COACH.length - 1);
    return NAMES_COACH[randomIndex];
}

const generatePositionCoach = () => {
    const randomIndex = getRandomInteger(0, POSITION_COACH.length - 1);
    return POSITION_COACH[randomIndex];
}


//PLAYER

const generateImagePlayer = () => {
    const randomIndex = getRandomInteger(0, IMAGES_PLAYER.length - 1);
    return IMAGES_PLAYER[randomIndex];
}

const generateNamePlayer = () => {
    const randomIndex = getRandomInteger(0, NAMES_PLAYER.length - 1);
    return NAMES_PLAYER[randomIndex];
}

const generatePositionPlayer = () => {
    const randomIndex = getRandomInteger(0, POSITION_PlAYER.length - 1);
    return POSITION_PlAYER[randomIndex];
}

const generatePositionDate = () => {
    const randomIndex = getRandomInteger(0, DATES_PlAYER.length - 1);
    return DATES_PlAYER[randomIndex];
}

const generatePositionRank = () => {
    const randomIndex = getRandomInteger(0, RANK_PlAYER.length - 1);
    return RANK_PlAYER[randomIndex];
}

//Generate cagds

export const generateCoach = () => {
    const coach =
    {
        id: nextId(),
        image: generateImageCoach(),
        name: generateNameCoach(),
        position: generatePositionCoach(),
    }
    return coach
}

export const generatePlayer = () => {
    const player =
    {
        id: nextId(),
        image: generateImagePlayer(),
        name: generateNamePlayer(),
        age: getRandomInteger(20, 40),
        height: getRandomInteger(160, 210),
        position: generatePositionPlayer(),
        date: generatePositionDate(),
        rank: generatePositionRank(),
    }
    return player
}


export const coachesList = new Array(6).fill(0).map(generateCoach);
export const playersList = new Array(10).fill(0).map(generatePlayer);