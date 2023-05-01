import React from 'react'
import './card.css'
import { securelyVotePoster } from '../Calls/Services';
import { auth } from '../firebase';


export default function Card({data, votedfor, setfrontendvoted}) {

    return (
        <div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={data.Poster} alt="" height={"100%"} width={"100%"}/>
                    </div>
                    <div className="flip-card-back">
                        <h2>{data.Roll}</h2>
                        <button
                        onClick={()=>{
                            securelyVotePoster(auth.currentUser.email, data.Roll)
                            .then((data)=>{
                                setfrontendvoted(true);
                            })
                        }}
                        >Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
