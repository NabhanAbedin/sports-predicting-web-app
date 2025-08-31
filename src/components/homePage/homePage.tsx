import { FC } from "react";
import '../../styles/homepage.css';
import video from '../../assets/0104.mov'

const HomePage:FC = () => {

    return (
        <>
        <div className="hero">
        <video autoPlay muted loop className="background-video" src={video}></video>
        <nav>
        </nav>
        <div className="title">
          <h1>Premier Predictor</h1>
          <p>Make your guesses a reality</p>
        </div>
      </div>
      <div id="info">
        <div className="what-we-do">
          <p>What Do We Do?</p>
          <div className="what-we-do-text">
            This web app uses a machine learning algorithm trained on historical match data, team performance metrics, and player statistics from the 2020–2021 season through the 2023–2024 season to predict the outcomes of future games. Users can experiment with different model hyperparameters to explore which combinations lead to the most accurate predictions.
            </div>
        </div>
      </div>
        </>
    )
}

export default HomePage;