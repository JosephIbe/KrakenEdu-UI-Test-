import React from 'react'

import styled from 'styled-components'

const RoadmapItemStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .8rem;

    .row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 1rem;
        align-items: center;

        .item-circle {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: ${props => props.itemColor};
        }
    }
`

export default function RoadmapItem({color, text, count}) {
    return <RoadmapItemStyles itemColor={color}>
        <div className="row">
            <div className="item-circle"></div>
            {text}
        </div>
        {count}
    </RoadmapItemStyles>
}