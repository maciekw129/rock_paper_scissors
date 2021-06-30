import { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';

/* COMPONENTS */
import { Button } from './Components/Button/Button.js';
import { Rules } from './Components/Rules/Rules.js';
import { Header } from './Components/Header/Header.js';
import { Board } from './Components/Board/Board.js';
import { Results } from './Components/Results/Results.js';

function App() {

  const [isRulesVisible, setIsRulesVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [userChoise, setUserChoise] = useState(undefined);
  const [computerChoise, setComputerChoise] = useState(undefined);
  const [whoWin, setWhoWin] = useState(undefined);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if(initialRender){
      setInitialRender(false);
    } else {

      if(userChoise === undefined) {
        return;
      }

    setTimeout(() => computerPicker(), 1200);

    }
  }, [userChoise]);

  useEffect(() => {
    if(initialRender){
      setInitialRender(false);
    } else {

      if(computerChoise === undefined || userChoise === undefined) {
        return
      }

      if(computerChoise === userChoise) {
        setWhoWin('Draw');
      } else if (computerChoise === 'Paper' && userChoise === 'Rock') {
        setWhoWin('Computer');
        setScore(score - 1);
      } else if (computerChoise === 'Scissors' && userChoise === 'Paper') {
        setWhoWin('Computer');
        setScore(score - 1);
      } else if (computerChoise === 'Rock' && userChoise === 'Scissors') {
        setWhoWin('Computer');
        setScore(score - 1);
      } else {
        setWhoWin('User');
        setScore(score + 1);
      }

    }
  }, [computerChoise])

  const showRules = () => {
    if(isRulesVisible) {
      setIsRulesVisible(false);
    } else {
      setIsRulesVisible (true);
    }
  }

  const userPicker = (choise) => {
    setUserChoise(choise);
  }

  const computerPicker = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    setComputerChoise(options[randomIndex]);
  }

  const playAgain = () => {
    setUserChoise(undefined);
    setComputerChoise(undefined);
    setWhoWin(undefined);
  }

  return (
    <div className="App">
      <GlobalStyle />
      {isRulesVisible ? <Rules onClick={showRules} /> : null}
      <Header
      score={score}
      />
      {userChoise ? <Results playAgain={playAgain} whoWin={whoWin} userChoise={userChoise} computerChoise={computerChoise} /> : <Board userPicker={userPicker} />}
      <Button onClick={showRules}> RULES </Button>
    </div>
  );
}

export default App;
