import React from 'react'

import styled from 'styled-components'

const ChipStyles = styled.div`
    height: 6vh;
    width: auto;
    min-width: 1rem;
    max-width: 5rem;
    background-color: ${props => props.chipSelected ? `var(--gradient-1)` : `var(--chip-bg-color)`};
    color: ${props => props.chipSelected ? `var(--white)` : `var(--chip-text-color)`};
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bolder;

    &:hover {
        cursor: pointer;
    }
`

export default function Chip({text, selected}) {
    console.log(selected)
    return <ChipStyles chipSelected={selected}>
        {text}
    </ChipStyles>
}
