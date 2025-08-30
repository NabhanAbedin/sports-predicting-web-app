import { Routes, Route } from "react-router-dom"
import TriviaPageSelect from "./components/triviaPage/triviaPageSelect"
import TriviaPage from "./components/triviaPage/TriviaPage"
import Nav from "./components/navigation/nav"
import HomePage from "./components/homePage/homePage"

const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/trivia" element={<TriviaPageSelect/>}/>
      <Route path="/trivia/:difficulty" element={<TriviaPage/>}/>
    </Routes>
    </>
  )
}

export default App
