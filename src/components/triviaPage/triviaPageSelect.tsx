import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Difficulty } from "../../types/trivia";
import '../../styles/triviapage.css';

const TriviaPageSelect:FC = () => { 
    const navigate = useNavigate();
    
    const chooseSelected = (selected: Difficulty) => {
        navigate(`/trivia/${selected}`)

    }

    return (
       <>
         <h1>Choose your difficulty</h1>
        <div className="trivia-select-container">
           <div className="choice-container"onClick={() => chooseSelected('easy')}>
                <h1>easy</h1>
                <p>Perfect for casual fans, easy trivia questions of basketball and soccer that anyone can answer. From identifying famous athletes to recalling simple facts about popular games, this level ensures everyone can have fun. Whether it’s naming the sport associated with a basketball hoop or guessing the number of players on a soccer team, these questions are designed to be straightforward and enjoyable for all!</p>
            </div> 
            <div className="choice-container" onClick={() => chooseSelected('medium')}>
                <h1>medium</h1>
                <p>Step up your game with more challenging questions that challenge your knowledge of basketball and soccer beyond the basics. Test yourself by identifying lesser-known players, recalling specfic matchups, or understanding some key rules and tactics. Whether knowing the MVP of a championship game or the details of a famous penalty shootout, this level is perfect for fans who want to test their deeper sports knowledge!</p>
            </div>
            <div className="choice-container" onClick={() => chooseSelected('hard')}>
                <h1>hard</h1>
                <p>Only true sports fans can answer these hard-level trivia questions! key moments in basketball and soccer history, and detailed statistics. player stats, historic team lineups, or surprising facts about iconic tournaments. Whether identifying the team with the most consecutive championship wins or recalling a record-breaking performance in a specific year, these questions are designed to push your expertise to the limit and separate casual fans from sports aficionados!</p>
            </div>
        </div>
       </>
    )

}

export default TriviaPageSelect;
