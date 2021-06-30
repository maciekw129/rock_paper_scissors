import styled from 'styled-components';
import imageRules from './image-rules.svg';
import iconClose from './icon-close.svg';

const RulesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

const RulesBackground = styled.div`
    background-color: white;
    padding: 1.5rem 2.5rem;
    border-radius: 7.5px;

    @media only screen and (max-width: 850px) {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

const RulesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    @media only screen and (max-width: 850px) {
        align-items: center;
        flex-direction: column;
    }
`

const Title = styled.h1`
    margin-bottom: 2.75rem;

    @media only screen and (max-width: 850px) {
        

    }
`;

const ClosingCross = styled.img`
    cursor: pointer;

    @media only screen and (max-width: 850px) {
        display: none;
    }
`



export function Rules(props) {
    return(
        <RulesContainer>
            <RulesBackground>
                <RulesHeader>
                    <Title>RULES</Title>
                    <ClosingCross src={iconClose} onClick={props.onClick} />
                </RulesHeader>
                <img src={imageRules} alt='rules' />
            </RulesBackground>
        </RulesContainer>
    )
}