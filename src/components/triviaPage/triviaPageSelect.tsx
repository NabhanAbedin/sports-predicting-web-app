import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Difficulty } from "../../types/trivia";

const TriviaPageSelect:FC = () => { 
    const navigate = useNavigate();
    
    const chooseSelected = (selected: Difficulty) => {
        navigate(`/trivia/${selected}`)

    }

    return (
        <div className="trivia-select-container">
           <div className="choice-container"onClick={() => chooseSelected('easy')}>
                <h1>easy</h1>
            </div> 
            <div className="choice-container" onClick={() => chooseSelected('medium')}>
                <h1>medium</h1>
            </div>
            <div className="choice-container" onClick={() => chooseSelected('hard')}>
                <h1>hard</h1>
            </div>
        </div>
    )

}

export default TriviaPageSelect
