import React from 'react'

import styled from 'styled-components'

const BoardStyles = styled.div`
    width: 100%;
    height: 22vh;
    background-image: linear-gradient(to right, #6D92F6, #A83CE8, #D55E99 );
    border-radius: 10px;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: center;
    padding-left: 1rem;
    padding-bottom: .5rem;

    h3 {
        font-size: 1rem;
    }

    h5 {
        font-size: .7rem;
    }
`

export default function Board() {
    return <BoardStyles>
        <h3>Frontend Mentor</h3>
        <h5>Feedback Board</h5>
    </BoardStyles>
}
