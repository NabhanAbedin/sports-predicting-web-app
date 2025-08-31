import { Leagues, predictionObj } from "../types/predictions"

export const getPredictions = async (league: Leagues): Promise<predictionObj[]> => {
    const res = await fetch('http://127.0.0.1:80/predictions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({league})
    })

    const json = await res.json();

    return json;
}