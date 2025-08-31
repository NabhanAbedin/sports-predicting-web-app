import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Leagues } from "../../types/predictions";
import { PredictorOptions, PredictorOption } from "../../types/predictions";
import PredictorInput from "./predictorInput";
import '../../styles/predictions.css';



const PredictionsInputs: FC = () => {
    const {league} = useParams<{league: Leagues}>();
    const [predictorOptions, setPredictorOptions] = useState<PredictorOptions>({
        estimators: '',
        minSamples: '',
        date: ''
    })

    const handleChange = (field: PredictorOption, value: string) => {
        setPredictorOptions(prev => ({
            ...prev, 
            [field]: value
        }))
    }

    return (
        <div className="prediction-inputs-container">
            <PredictorInput
                predictorOption="estimators"
                inputValue={predictorOptions.estimators}
                handleChange={handleChange}
                explanation="Think of this like asking multiple people for their opinion before making a decision. The model creates many decision trees that each look at the data and make a prediction, then combines all their opinions for the final answer. When you increase the number of trees, you're essentially getting more expert opinions, which usually makes your predictions more accurate but takes longer to process. If you use fewer trees, the model works faster but might miss some important patterns in the data. Most people find that somewhere between 100-200 trees gives a good balance, but you can experiment with different numbers to see how it affects your predictions."
            />
            <PredictorInput 
            predictorOption="minSamples"
            inputValue={predictorOptions.minSamples}
             handleChange={handleChange}
              explanation="This controls how picky your model is when making decisions. Imagine you're trying to figure out if a team will win based on their past games. If you set this number high, the model will only make a decision when it has seen many similar situations before, making it more conservative and general in its predictions. If you set it low, the model will make decisions even when it has only seen a few similar games, which might make it focus too much on specific unusual games rather than general patterns. Setting this around 10 usually works well because it prevents the model from memorizing odd individual games while still allowing it to learn meaningful patterns."/>
            <PredictorInput 
            predictorOption="date"
            inputValue={predictorOptions.date}
            handleChange={handleChange} 
            explanation="This date determines which games your model learns from versus which games it uses to test how good its predictions are. Everything before this date is used to train the model, and everything after is used to see how well it predicts. If you pick an earlier date, your model learns from older games and gets tested on more recent ones, which gives you a better idea of how well it will predict future games. If you pick a later date, the model gets to learn from more games but has fewer recent games to test on. The key is finding a balance where you have enough historical games for the model to learn patterns from, but also enough recent games to properly test whether those patterns still hold true."/>
        </div>
    )

}

export default PredictionsInputs;