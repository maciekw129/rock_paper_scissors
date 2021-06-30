import styled from 'styled-components';
import { Rock, Paper, Scissors } from '../Options/Options.js';
import { ResultsText } from '../ResultsText/ResultsText.js';

const ResultsContainer = styled.div`
    display: flex;
    width: 60%;
    height: 50%;

    @media only screen and (max-width: 850px) {
        justify-content: center;
    }
`;
const Opponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;

    @media only screen and (max-width: 850px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        padding: 0.5rem;
    }
`;

const OpponentTitle = styled.h2`
    padding: 2rem;
    color: white;
    text-align: center;
`;

const BlankCircle = styled.div`
    border-radius: 50%;
    width: 140px;
    height: 140px;
    background-color: hsl(229, 25%, 31%);
`;

const EmptyResultsText = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;

    @media only screen and (max-width: 850px) {
        display: none;
    }
`

export function Results(props) {

    const userChoise = props.userChoise;
    const computerChoise = props.computerChoise;

    const optionChooser = (choise) => {
        if (choise === 'Paper') {
            return <Paper />
        } else if (choise === 'Rock') {
            return <Rock />
        } else if (choise === 'Scissors'){
            return <Scissors />
        } else {
            return <BlankCircle />;
        }
    }

    return(
        <ResultsContainer>
            <Opponent>
                <OpponentTitle>YOU PICKED</OpponentTitle>
                {optionChooser(userChoise)}
            </Opponent>
            {props.whoWin ? <ResultsText playAgain={props.playAgain} whoWin={props.whoWin} /> : <EmptyResultsText />}
            <Opponent>
                <OpponentTitle>THE HOUSE PICKED</OpponentTitle>
                {optionChooser(computerChoise)}
            </Opponent>
        </ResultsContainer>
    )
}