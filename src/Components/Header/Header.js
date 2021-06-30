import styled from 'styled-components';
import logo from './logo.svg';

const HeaderContainer = styled.header`
    border: 3px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    width: 60%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: 850px) {
        width: 90%;
    }
`;

const ScoreContainer = styled.div`
    background-color: #ffffff;
    padding: 1rem 2rem;
    border-radius: 5px;
`;

const ScoreTitle = styled.h3`
    color: hsl(229, 64%, 46%);
`

const Score = styled.p`
    font-size: 250%;
    text-align: center
`;

export function Header(props) {
    return(
        <HeaderContainer>
            <img src={logo} />
            <ScoreContainer>
                <ScoreTitle>SCORE</ScoreTitle>
                <Score>{props.score}</Score>
            </ScoreContainer>
        </HeaderContainer>
    )
};