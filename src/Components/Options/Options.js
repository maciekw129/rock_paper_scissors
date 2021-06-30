import styled from 'styled-components';
import paper from './icon-paper.svg';
import rock from './icon-rock.svg';
import scissors from './icon-scissors.svg';

const HandOption = styled.div`
    background-color: #ffffff;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    border: 17px solid;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Rock = styled(HandOption)`
    border-color: hsl(349, 71%, 52%);
    background-image: url(${rock});
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
`

export const Paper = styled(HandOption)`
    border-color: hsl(230, 89%, 62%);
    background-image: url(${paper});
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
`

export const Scissors = styled(HandOption)`
    border-color: hsl(39, 89%, 49%);
    background-image: url(${scissors});
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
`