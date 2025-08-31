import { Leagues, PredictionAPIResponse, predictionObj, PredictorOptions } from "../types/predictions"

export const getPredictions = async (league: Leagues, predictorOptions: PredictorOptions ): Promise<PredictionAPIResponse> => {
    const res = await fetch('http://127.0.0.1:80/predictions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            league: league,
            estimators: predictorOptions.estimators,
            minSamples: predictorOptions.minSamples,
            date: predictorOptions.date
        })
    })

    const json = await res.json();

    return json;
    
}