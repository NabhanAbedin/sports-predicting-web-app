import { FC } from "react";
import { QuestionsOutcomeProps } from "../../types/trivia";
import { useNavigate } from "react-router-dom";


const QuestionsOutcome:FC<QuestionsOutcomeProps> = ({filledQuestions}) => {
    const navigate = useNavigate();


    const correct: number = filledQuestions.filter(
        q => q.selectedIndex === q.correctIndex
      ).length;

    const handleClick = () => {
        navigate('/trivia')
    }
    

    return (
     <>
       <div className="final-score">
        <h1>Final Score:</h1>
        <p>Correct: {correct}/30</p>
        <p>Wrong: {30 - correct}/30</p>
        </div>

        <div className="final-score-bars">
        <div className="progress">
            <div className="progress-done"></div>
        </div>
        <div className="progress">
            <div className="wrong-answer-bar"></div>
        </div>
        </div>
        <button onClick={handleClick}>return</button>
     </>
    )
}


export default QuestionsOutcome;