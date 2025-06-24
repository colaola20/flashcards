import './App.css';
import {useState} from 'react';
import flashcards from './assets/questions.json';
import Card from '/Users/olha/vscode101/WEB102/flashcards/flashcardsGame/src/components/Card.jsx';

const App = () => {
  console.log(flashcards);
  const [isQuestion, setIsQuestion] = useState(true);
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = userInput.trim().toLowerCase() === flashcards[index].answer.trim().toLowerCase();

    let inputStyle = {
    margin: '1rem 0',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #ccc',
    transition: 'border 0.2s'
  };

    // Only style after submit
  if (submitted) {
    inputStyle.border = isCorrect ? '2px solid #4caf50' : '2px solid #f44336';
    inputStyle.background = isCorrect ? '#e8f5e9' : '#ffebee';
  }

  const checkAnswer = () => {
    setSubmitted(true);
  }

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    setSubmitted(false);
  };

  const getNextQuestion = () => {
    setIsQuestion(true);
    if (index < flashcards.length - 1) {
      setIndex(index + 1)
      setUserInput('');
      setSubmitted(false);
    }
  }
  const getPrevQuestion = () => {
    setIsQuestion(true);
    if (index > 0) {
      setIndex(index - 1)
      setUserInput('');
      setSubmitted(false);
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
      <div className='inputBlock'>
        <h4>Guess the answer here: </h4>
        <input type='text'
        placeholder='Place your answer here...'
        value={userInput}
        onChange={handleInputChange}
        style={inputStyle}
        />
        <button onClick={checkAnswer}>Submit</button>
      </div>
      <div className='buttonsArea'>
        <button className='nextBtn' onClick={getPrevQuestion} >
          <img src="/src/assets/prev-icon.png" alt="Next" style={{width: '24px', height: '24px'}}/>
        </button>
        <button className='nextBtn' onClick={getNextQuestion} >
          <img src="/src/assets/next-icon.png" alt="Next" style={{width: '24px', height: '24px'}}/>
        </button>
      </div>
    </div>
  )
}

export default App