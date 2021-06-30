import styled from 'styled-components';
import triangle from './bg-triangle.svg';

import { Rock, Paper, Scissors } from '../Options/Options.js';

const BoardContainer = styled.div`
    position: relative;
    margin-top: 10rem;

    @media only screen and (max-width: 850px) {
        margin-top: 0;
    }
`;

const RockOnBoard = styled(Rock)`
    position: absolute;
    bottom: -10%;
    right: 50%;
    transform: translateX(50%);
    cursor: pointer;
`;

const PaperOnBoard = styled(Paper)`
    position: absolute;
    left: -10%;
    top: -10%;
    cursor: pointer;
`;

const ScissorsOnBoard = styled(Scissors)`
    position: absolute;
    right: -10%;
    top: -10%;
    cursor: pointer;
`

export function Board(props) {
    return(
        <BoardContainer>
            <img src={triangle} />
            <RockOnBoard onClick={() => props.userPicker('Rock')} />
            <PaperOnBoard onClick={() => props.userPicker('Paper')} />  
            <ScissorsOnBoard onClick={() => props.userPicker('Scissors')} />
        </BoardContainer>
    )
};