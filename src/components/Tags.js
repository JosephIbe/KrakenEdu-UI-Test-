import React from 'react'

import styled from 'styled-components'
import Chip from './Chip'

const TagStyles = styled.div`
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: var(--white);
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .8rem;
`

export default function Tags() {
    return <TagStyles>
        <Chip text='All' selected={true}/>
        <Chip text='UI'/>
        <Chip text='UX'/>
        <Chip text='Enhancement'/>
        <Chip text='Bug'/>
        <Chip text='Feature'/>
    </TagStyles>
}
