import { FC, useEffect, useState } from "react";
import { Leagues } from "../../types/predictions";
import premImg from '../../assets/premierleague.png';
import laLigaImg from '../../assets/laliga.png';
import serieAImg from '../../assets/serieA.png';
import { useNavigate } from "react-router-dom";


const LeagueChoice:FC = () => {
    const [selectedLeague,setSelectedLeague] = useState<Leagues | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedLeague) {
            if (!selectedLeague) return;
            navigate(`/predictions/${selectedLeague}`);
        }
    }, [selectedLeague]);

    return (
        <>
         <h1>Select Your League</h1>
        <div className="league-select-container">
            <div className="league-select" onClick={() => setSelectedLeague('PremierLeague')}>
                <img src={premImg} alt="" />
            </div>
            <div className="league-select" onClick={() => setSelectedLeague('laLiga')}>
                <img src={laLigaImg} alt="" />
            </div>
            <div className="league-select">
                <img src={serieAImg} alt="" onClick={() => setSelectedLeague('SerieA')}/>
            </div>
        </div>
        </>
    )
}


export default LeagueChoice;