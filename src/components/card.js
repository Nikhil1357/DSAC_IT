import React from 'react'
import './card.css'

export default function Card({data}) {

    console.log(data);
    return (
        <div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={data.Poster} alt="" height={"100%"} width={"100%"}/>
                    </div>
                    <div class="flip-card-back">
                        <h2>{data.Roll}</h2>
                        <button>Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
