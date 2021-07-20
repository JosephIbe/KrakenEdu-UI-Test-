import React from 'react'
import styled from 'styled-components'

import {IoIosArrowUp} from 'react-icons/io'
import {FaComment as Comment} from 'react-icons/fa'

import Chip from './Chip'

const SuggestionsBoxStyles =  styled.div`
    width: 100%;
    height: 150px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    padding: 15px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 25px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }

    .meta-holder {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 1rem;

        .upvotes {
            width: 50px;
            height: 50px;
            background-color: var(--bluish-grey);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            border-radius: 10px;

            p {
                font-weight: bolder;
            }
            
        }

        .meta {
            
            h3 {
                font-size: 1rem;
                font-weight: bolder;
                color: var(--bluish-grey);
            }

            h5 {
                font-size: .6rem;
                margin-bottom: 1rem;
            }
        }
    }

    .comments {
        display: flex;
        align-items: center;
        gap: .7rem;
        color: var(--bluish-grey);  

        svg {
            width: 30px;
        }

        h3 {
            font-weight: bolder;
        }
    }
`

export default function SuggestionsBox({upvotesCount, title, subTitle, chipText, commentsCount}) {
    return <SuggestionsBoxStyles>
        <div className="meta-holder">
            <div className="upvotes"> 
                <IoIosArrowUp />
                <p>{upvotesCount}</p>
            </div>

            <div className="meta">
                <h3>{title}</h3>
                <h5>{subTitle}</h5>
                <Chip text={chipText} />
            </div>
        </div>

        <div className="comments">
            <Comment />
            <h3>{commentsCount}</h3>
        </div>
    </SuggestionsBoxStyles>
}
