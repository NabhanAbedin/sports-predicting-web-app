import { useQuery } from '@tanstack/react-query';
import {FC, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Question, Difficulty, filledQuestions } from '../../types/trivia';
import { fetchQuestions } from '../../apis/triviaApi';
import TriviaQuestion from './triviaQuestion';
import QuestionsOutcome from './questionsOutcome';

const TriviaPage:FC = () => {
    const {difficulty} = useParams<{difficulty: Difficulty}>();
    const [selectedQuestions, setSelectedQuestions] = useState<filledQuestions[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);

    if (!difficulty) return <h1>Error</h1>

    const {data: questions, isLoading, error } = useQuery<Question[], Error>({
        queryKey: ['questions'],
        queryFn: () => fetchQuestions(difficulty),
        enabled: Boolean(difficulty),
        staleTime: 0
    })

    return (
        <>
            {!submitted ? (
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
                        <TriviaQuestion key={question.number} question={question} setSelectedQuestions={setSelectedQuestions}/>
                     ))}
                     <div className='answered-container'>
                        questions answered: {selectedQuestions.length} / {questions.length}
                     </div>
                     <div className='submit-container'>
                    <button onClick={() => {
                    if (selectedQuestions.length === questions?.length) setSubmitted(true);
                    else alert('all questions not selected');
                }}>submit!</button>
            </div>
                    </>
                )}
               </div>
            ) : (
                <QuestionsOutcome filledQuestions={selectedQuestions} />
            )}
            
        </>
    )
}

export default TriviaPage