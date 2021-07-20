import React from 'react'

import styled from 'styled-components'

import RoadmapItem from './RoadmapItem'

const RoadmapStyles = styled.div`
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: var(--white);
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: .8rem;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        h3 {
            font-size: 1rem;
        }

        h5 {
            font-size: 0.7rem;
            color: var(--gradient-1);
            text-decoration: underline;
        }
    }
`

export default function Roadmap() {
    return <RoadmapStyles>
        <div className="header">
            <h3>Roadmap</h3>
            <h5>View</h5>
        </div>    
        <div className="list">
            <RoadmapItem color='red' text='Planned' count='2' />
            <RoadmapItem color='green' text='In-Progress' count='3' />
            <RoadmapItem color='purple' text='Live' count='1' />
        </div>
    </RoadmapStyles>
}
