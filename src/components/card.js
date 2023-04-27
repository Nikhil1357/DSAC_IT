import React from 'react'
import './card.css'

export default function Card(props) {

    return (
        <div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h1>{props.name}</h1>
                    </div>
                    <div class="flip-card-back">
                        <h2>{props.desc}</h2>
                        <button>Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
