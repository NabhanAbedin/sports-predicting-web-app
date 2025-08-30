import { Dispatch, SetStateAction } from "react";

export interface Question {
    question: string,
    options: string[],
    answer: string,
    number: number,
    answerNumber: number
}

export type Difficulty = 'easy' | 'medium' | 'hard'

export interface filledQuestions {
    questionNumber: number,
    selectedIndex: number,
    correctIndex: number,
}

export interface TriviaQuestionProps {
    question: Question;
    setSelectedQuestions: Dispatch<SetStateAction<filledQuestions[]>>;
}

