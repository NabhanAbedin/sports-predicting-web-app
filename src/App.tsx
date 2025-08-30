import { Routes, Route } from "react-router-dom"
import TriviaPageSelect from "./components/triviaPage/triviaPageSelect"
import TriviaPage from "./components/triviaPage/TriviaPage"
const App = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/trivia" element={<TriviaPageSelect/>}/>
      <Route path="/trivia/:difficulty" element={<TriviaPage/>}/>
    </Routes>
  )
}

export default App
