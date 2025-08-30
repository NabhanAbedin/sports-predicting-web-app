import { useQuery } from '@tanstack/react-query';
import {FC, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Question, Difficulty, filledQuestions } from '../../types/trivia';
import { fetchQuestions } from '../../apis/triviaApi';
import TriviaQuestion from './triviaQuestion';

const TriviaPage:FC = () => {
    const {difficulty} = useParams<{difficulty: Difficulty}>();
    const [selectedQuestions, setSelectedQuestions] = useState<filledQuestions[]>([]);

    if (!difficulty) return <h1>Error</h1>

    const {data: questions, isLoading, error } = useQuery<Question[]>({
        queryKey: ['questions'],
        queryFn: () => fetchQuestions(difficulty),
        enabled: Boolean(difficulty),
        staleTime: 0
    })

    return (
        <div>
            <div className='questions-container'>
                    {isLoading && (
                        <h1>Loading...</h1>
                    )}
                    {error && (
                        <h1>error...</h1>
                    )}
                    {questions && (
                        <>
                         {questions.map(question => (
                            <TriviaQuestion question={question} setSelectedQuestions={setSelectedQuestions}/>
                         ))}
                        </>
                    )}
                    
            </div>
            <div className='submit-container'>
                <button>submit!</button>
            </div>
        </div>
    )
}

export default TriviaPage