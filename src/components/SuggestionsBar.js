import React from 'react'
import styled from 'styled-components'

const SuggestionsBarStyles = styled.div`
    width: 100%;
    height: 70px;
    background-color: var(--main-content-bar-color);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;

    .suggestions {
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #D1D9ED;
        gap: 1.5rem;

    }
    
    .button {
        height: 50px;
        background-color: var(--main-content-btn-color);
        border-radius: 10px;
        padding: 10px;
        font-size: .9rem;
        font-weight: bolder;
        color: var(--white);
    }
`

export default function SuggestionsBar() {
    return <SuggestionsBarStyles>
        <div className="suggestions">
            &#128161; 6 Suggestions
            Sort by: Most Upvotes &#9660;
        </div>
        <div className="button">
            &#43; Add Feedback
        </div>
    </SuggestionsBarStyles>
}
