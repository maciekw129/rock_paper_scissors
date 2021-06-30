import styled from 'styled-components'

const ResultsTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;

    @media only screen and (max-width: 850px) {
        position: absolute;
        padding: 0;
        overflow: hidden;
        height: auto;
        bottom: 20%;
    }
`;

const ResultsTextTitle = styled.h2`
    color: white;
    font-size: 200%;
    margin-bottom: 1rem;
`;

const PlayAgainButton = styled.button`
    width: 90%;
    padding: 0.5rem 3rem;
    border-radius: 7px;
    cursor: pointer;
    transition: color 0.3s linear;
    &:hover {
        color: red;
    }

    @media only screen and (max-width: 850px) {
        width: 60%;
        padding: 1rem 3rem;
    }
`;

export function ResultsText(props) {

    const decideWhoWin = () => {

        if(props.whoWin === 'Computer') {
            return 'YOU LOOSE';
        } else if (props.whoWin === 'User') {
            return 'YOU WIN';
        } else {
            return 'DRAW';
        }
    }

    return(
        <ResultsTextContainer>
            <ResultsTextTitle>{decideWhoWin()}</ResultsTextTitle>
            <PlayAgainButton onClick={props.playAgain}>PLAY AGAIN</PlayAgainButton>
        </ResultsTextContainer>
    )
}