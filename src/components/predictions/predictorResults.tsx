import { FC } from "react";
import { PredictionAPIResponse, PredictorResultsProps } from "../../types/predictions";
import { useQuery } from "@tanstack/react-query";
import { getPredictions } from "../../apis/predictionsApi";
import { formatDate } from "../../utils/dateFormat";
import { useNavigate } from "react-router-dom";


const PredictorResults:FC<PredictorResultsProps> = ({league, predictorOptions}) => {
    const navigate = useNavigate();

    const {data: results = {precision: [], predictions: []}, isLoading, error} = useQuery<PredictionAPIResponse>({
        queryKey: ['results'],
        queryFn: () => getPredictions(league, predictorOptions)
    })

    if (isLoading) return <h1>loading...</h1>;
    if (error) return <h1>Something went wrong</h1>;

    return  (
        <>
         {results?.predictions.length > 0 && (
            <>
            <table className='predictions-table' border={1} cellPadding={8}>
            <thead>
            <tr>
                <th>Date</th>
                <th>Team</th>
                <th>Opponent</th>
                <th>Actual</th>
                <th>Prediction</th>
            </tr>
            </thead>
            <tbody>
            {results.predictions.map((r, idx) => (
                <tr key={idx}>
                <td>{formatDate(r.Date)}</td>
                <td>{r.Team}</td>
                <td>{r.Opponent}</td>
                <td>{r.actual}</td>
                <td>{r.prediction}</td>
                </tr>
            ))}
            </tbody>
        </table>
          <div className="precision-container">
            <p>Precision: {results.precision}</p>
            <button className="return-button" onClick={() => {
            navigate('/predictions')
          }}>Return</button>
          </div>
            </>
         )}
        </>
    )
    }

export default PredictorResults;