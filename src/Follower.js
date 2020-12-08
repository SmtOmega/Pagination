import React from 'react'


const Follower = ({login, avatar_url, html_url}) => {
    return (
        <div className="card">
            <img src={avatar_url} alt="follower" />
            <h3>{login}</h3>
            <a href={html_url}>View Profile</a>
        </div>
    )
}
export default Follower