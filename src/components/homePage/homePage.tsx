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
            We utilize a machine learning algorithm, based off of historical data, player
            statistics, team performance metrics, and real-time game analytics, to accurately predict the standings
            of top European football leagues, providing users with deeper
            insights into potential outcomes and trends.
          </div>
        </div>
      </div>
        </>
    )
}

export default HomePage;