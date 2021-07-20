import React from 'react'

import styled from 'styled-components'

import SideBar from './SideBar'
import MainContent from './MainContent'

const AppStyles = styled.div`
    background-color: var(--gray-bg);
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 2rem 3rem;
`

export default function App(){
    return <AppStyles>
        <SideBar />
        <MainContent />
    </AppStyles>
}