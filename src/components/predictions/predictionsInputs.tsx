import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Leagues } from "../../types/predictions";
import { PredictorOptions, PredictorOption } from "../../types/predictions";
import PredictorInput from "./predictorInput";
import '../../styles/predictions.css';
import PredictorResults from "./predictorResults";



const PredictionsInputs: FC = () => {
    const {league} = useParams<{league: Leagues}>();
    const [predictorOptions, setPredictorOptions] = useState<PredictorOptions>({
        estimators: '',
        minSamples: '',
        date: ''
    })
    const [step, setStep] = useState<'form' | 'result'>('form');

    const handleChange = (field: PredictorOption, value: string) => {
        setPredictorOptions(prev => ({
            ...prev, 
            [field]: value
        }))
    }

    const handleSubmit = () => {
            if (Number(predictorOptions.estimators) < 10 || Number(predictorOptions.estimators) > 200) {
                alert('minimum is 10');
                 return 
                }
            if (Number(predictorOptions.minSamples) < 3 || Number(predictorOptions.minSamples) > 30) {
                alert('estimators need to be between 3 and 30'); 
                return;

            } 
            if (Number(predictorOptions.date) < 2021 || Number(predictorOptions.date) > 2023) {
                alert('date needs to be between 2021 and 2023');
                return
            } 

           setStep('result');

    }

    if (step === 'result' && league) {
        return <PredictorResults league={league} predictorOptions={predictorOptions} />
    }

    return (
        <div className="prediction-inputs-container">
            <h1 className="header">Choose your prediction model settings</h1>
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
            <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )

}

export default PredictionsInputs;