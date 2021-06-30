import styled from 'styled-components';

export const Button = styled.button`
    position: absolute;
    bottom: 25px;
    right: 25px;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px 35px;
    color: lightgray;
    background-color: hsl(237, 49%, 15%);
    transition: color 0.3s linear;
    transition: background-color 0.3s linear;
    z-index: 99;

    &:hover {
        cursor: pointer;
        color: hsl(237, 49%, 15%);
        background-color: lightgray;
    }

    @media only screen and (max-width: 850px) {
        position: static;
        
    }
`;
