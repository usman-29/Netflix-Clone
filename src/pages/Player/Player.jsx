import React, { useState, useEffect } from 'react';
import './Player.css';
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    });

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNThlYTUzZWVmNWJiZjRlZjJkYjVkZjYxNjc0MTgyYiIsIm5iZiI6MTczNjY5Nzk5My4zNzYsInN1YiI6IjY3ODNlODg5YWJhYmJiYTA0MGJiNGY4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cI_cvrGHv2sSWBWapwdFXqmcUfPq4WpjC94xHf_cTiw'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.error(err))
    }, [])

    if (!apiData) {
        return <div>Loading...</div>;
    }
    return (
        <div className='player'>
            <img src={back_arrow_icon} onAbort={() => { navigate(-2) }} />
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
            <div className='player-info'>
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.typeof}</p>
            </div>
        </div>
    )
}

export default Player;
