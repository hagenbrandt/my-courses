import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';

type CourseEntryProps = {
    name: string,
    flag: boolean
}

export default function CourseEntry({ name, flag }: CourseEntryProps) {
    
    return (
        <Entry>
            <div className="backgroundImage" />
            <div className="content">
                <h2>{name}</h2>
                <FavoriteIcon className={ flag ? 'icon -flagged' : 'icon' }/>
            </div>
        </Entry>
    )
}

const Entry = styled.section`
    display: flex;

    .backgroundImage {
        background: url('https://source.unsplash.com/300x80/?horse');
        background-size: cover;
        background-position: center;
        width: 20%;
        height: 20vw;
        max-height: 160px;
        border-radius: 12px 0 0 12px;
        margin-bottom: 20px;

        @media(min-width: 1024px) {
            margin-bottom: 60px;
        }
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        height: 20vw;
        max-height: 160px;
        border-radius: 0 12px 12px 0;
        background: #fff;
        font-size: .7rem;
        padding: 0 6vw;

        @media(min-width: 1024px) {
            font-size: 1.2rem
        }
    }

    .icon {
        width: 1em;
        height: 1em;

        @media(min-width: 1024px) {
            width: 1.6em;
            height: 1.6em;
        }
    }
    .-flagged {
        fill: #87B726;
    }
`