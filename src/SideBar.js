import React from 'react'

import styled from 'styled-components'
import Board from './components/Board'
import Tags from './components/Tags'
import Roadmap from './components/Roadmap'

const SideBarStyles = styled.div`
    width: 25%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default function SideBar() {
    return <SideBarStyles>
        <Board />
        <Tags />
        <Roadmap />
    </SideBarStyles>
}