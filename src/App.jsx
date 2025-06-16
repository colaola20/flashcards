import './App.css';
import {useState} from 'react';

const App = () => {
  const [isQuestion, setIsQuestion] = useState(true);
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <h2>From Hello World to Hacker Mode!</h2>
      <h4>Level up your CS skills one flashcard at a time.</h4>
      <h7>Number of cards: 10</h7>
      <div>
        
      </div>
    </div>
  )
}

export default App