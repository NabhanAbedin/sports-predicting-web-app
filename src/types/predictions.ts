export type Leagues = 'laLiga' | 'PremierLeague' | 'SerieA';

export interface predictionObj {
    Date: number,
    Opponent: string,
    Team: string,
    actual: string,
    prediction: string
}

export interface PredictionAPIResponse {
    precision: number[],
    predictions: predictionObj[]
}

export interface PredictorOptions {
    estimators: string,
    minSamples: string, 
    date: string
}

export type PredictorOption = keyof PredictorOptions;

export interface PredictorInputProps {
    predictorOption: PredictorOption,
    inputValue: string,
    handleChange: (field: PredictorOption, value: string) => void,
    explanation: string
}

export interface PredictorResultsProps {
    league: Leagues,
    predictorOptions: PredictorOptions
}