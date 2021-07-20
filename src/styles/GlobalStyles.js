import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root{
        --white : #FFF;
        --black: #000;
        --deep-dark: #1E1E1E;
        --gray-bg: #F7F8FC;
        --gradient-1: #6D92F6;
        --gradient-2: #A83CE8;
        --gradient-3: #D55E99;
        --chip-selected-color: #4663DC;
        --chip-text-color: #4169E1;
        --chip-bg-color: #F7F8FC;
        --main-content-bar-color: #373E68;
        --main-content-btn-color: #9825D1;
        --bluish-grey: #9dbcd4;
    }
    
    html{
        font-size: 25px;
        background-color: var(--deep-dark);
    }
    
    ul,li{
        list-style: none;
    }

    li {
        &:hover {
            cursor: pointer;
        }
    }

    a{
        text-decoration: none;
    }

    img, svg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    button{
        outline: none
    }
`

export default GlobalStyles