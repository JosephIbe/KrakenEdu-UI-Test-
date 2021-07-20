import React from 'react'

import styled from 'styled-components'
import SuggestionsBar from './components/SuggestionsBar'
import SuggestionsBox from './components/SuggestionsBox'

const MainContentStyles = styled.div`
    width: 80%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export default function MainContent() {
    return <MainContentStyles>
            <SuggestionsBar />
            
            <SuggestionsBox 
                title="Add tags for solution"
                subTitle="Easier to search for solutions based on a specific stack"
                upvotesCount="112"
                commentsCount="2"
                chipText="Enhancement"
            />

            <SuggestionsBox 
                title="Add a dark theme option"
                subTitle="It would help people with light sensitivities and who prefer dark mode"
                upvotesCount="99"
                commentsCount="4"
                chipText="Feature"
            />

            <SuggestionsBox 
                title="Q&amp;A within the challenge hubs"
                subTitle="Challenge specific Q&amp;A would make for easy reference"
                upvotesCount="65"
                commentsCount="1"
                chipText="Feature"
            />

            <SuggestionsBox 
                title="Allow image/video upload to feedback"
                subTitle="Images and screencards can enhance comments on solutions"
                upvotesCount="51"
                commentsCount="2"
                chipText="Enhancement"
            />

            <SuggestionsBox 
                title="Ability to follow others"
                subTitle="Stay updated on comments and solutions other people post"
                upvotesCount="42"
                commentsCount="3"
                chipText="Feature"
            />

            <SuggestionsBox 
                title="Preview images not loading"
                subTitle="Challenge preview images are missing when you add a filter"
                upvotesCount="3"
                commentsCount="0"
                chipText="Bug"
            />
    </MainContentStyles>
}