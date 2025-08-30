import { Routes, Route } from "react-router-dom"
import TriviaPageSelect from "./components/triviaPage/triviaPageSelect"
import TriviaPage from "./components/triviaPage/TriviaPage"
import Nav from "./components/navigation/nav"

const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" />
      <Route path="/trivia" element={<TriviaPageSelect/>}/>
      <Route path="/trivia/:difficulty" element={<TriviaPage/>}/>
    </Routes>
    </>
  )
}

export default App
