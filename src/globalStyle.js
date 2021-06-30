import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Barlow Semi Condensed';
}

.App {
    background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    background-repeat: no-repeat;
    background-size: contain;

    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 5% 0;

    @media only screen and (max-width: 850px) {
        justify-content: space-between;
    }
}
`;

export default GlobalStyle;