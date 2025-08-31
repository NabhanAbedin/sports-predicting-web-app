import { FC, useState } from "react";
import { PredictorInputProps } from "../../types/predictions";

const PredictorInput: FC<PredictorInputProps> = ({predictorOption ,inputValue, handleChange, explanation}) => {
    const [showExplanation, setShowExplantion] = useState<boolean>(false);

    return (
        <div className="prediction-input">
                <p>Enter the {predictorOption}</p>
                <input 
                type="text"
                value={inputValue}
                onChange={(e) => handleChange(predictorOption, e.target.value )}
                 />
                 <button onClick={() => setShowExplantion(!showExplanation)}>What are {predictorOption}?</button>
                 {showExplanation && (
                    <div className="explanation-container">
                        {explanation}
                    </div>
                 )}
        </div>
    )
}

export default PredictorInput;