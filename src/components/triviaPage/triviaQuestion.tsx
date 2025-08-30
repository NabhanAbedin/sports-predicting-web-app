import { FC, useState } from "react";
import { TriviaQuestionProps } from "../../types/trivia";

const TriviaQuestion:FC<TriviaQuestionProps> = ({question, setSelectedQuestions}) => {
    const [selected, setSelected ] = useState<number | null>(null);

    const handleChoiceClick = (newQuestionNumber: number,selectedAnswerIndex: number, correctAnswerIndex: number) => {
       setSelected(prev  => {
        if (prev == selectedAnswerIndex) return null
        return selectedAnswerIndex
       })

       setSelectedQuestions(prev => {
        const exists = prev.some(q => q.questionNumber === newQuestionNumber);

        if (exists) {
          return prev.filter(q => q.questionNumber !== newQuestionNumber);
        } else {
         
          return [...prev, {
            questionNumber: newQuestionNumber,
            selectedIndex: selectedAnswerIndex,
            correctIndex: correctAnswerIndex
          }];
        }
       })
    }

    return (
        <>
         <div className="question-container" key={question.number}>
            <h3>{question.question}</h3>
            {question.options.map((value, index) => (
            <div className={`question-option ${selected === index ? 'active': ''}`} onClick={() => handleChoiceClick(question.number, index, question.answerNumber)}>
                <p>{value}</p>
            </div>
             ))}
         </div>
        </>
    )

}

export default TriviaQuestion;