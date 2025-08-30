import { Question, Difficulty } from "../types/trivia";

export const fetchQuestions = async (selected: Difficulty): Promise<Question[]> => {
    console.log('called');
    const res = await fetch(`/data/${selected}Trivia.json`);
    if (!res.ok) {
        throw new Error('could not retrieve questions');
    }

    const json = await res.json();

    // const questions = await res.json();
    // const tenQuestions: [] = []
    // for (let i = 0; i < 10; i++) {
    //     const randomIndex = Math.floor(Math.random() * questions.length);
    //     const value = questions.splice(randomIndex, 1)[0];
    //     tenQuestions.push(value: []);

    // }
    return json;
}