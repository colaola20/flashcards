import './App.css';
import {useState} from 'react';
import flashcards from './assets/questions.json';
import Card from '/Users/olha/vscode101/WEB102/flashcards/flashcardsGame/src/components/Card.jsx';

const App = () => {
  console.log(flashcards);
  const [isQuestion, setIsQuestion] = useState(true);
  const [index, setIndex] = useState(0);

  const getNextQuestion = () => {
    setIsQuestion(true);
    if (index < flashcards.length - 1) {
      setIndex(index + 1)
    }
  }

  const flip = () => {
    setIsQuestion(!isQuestion)
  }

  return (
    <div className="App">
      <h2>From Hello World to Hacker Mode!</h2>
      <h4>Level up your CS skills one flashcard at a time.</h4>
      <h5>Number of cards: {flashcards.length}</h5>
      <h5>Question #{index + 1}</h5>
      <div onClick={flip}>
        <Card flashcard={flashcards[index]} question={isQuestion} difficulty={flashcards[index].difficulty} imgUrl={flashcards[index].imgUrl}/>
      </div>
      <div>
        <button className='nextBtn' onClick={getNextQuestion} >
          <img src="/src/assets/next-icon.png" alt="Next" style={{width: '24px', height: '24px'}}/>
        </button>
      </div>
    </div>
  )
}

export default App