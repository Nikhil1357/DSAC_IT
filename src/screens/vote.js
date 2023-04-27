import React from 'react'
import Card from '../components/card'

export default function vote() {

    const st={
        display:"flex",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-around",
        height:"200vh",
        width:"98vw"
    }
  return (
    <div>
        <h2 style={{fontSize:"3rem"}}>Cast your vote</h2>
        <div style={st}>
        <Card name="Project1" desc="Nikhil mowa thopu, Nikhil mowa ne oopu"/>
        <Card name="Project2" desc="Desc2"/>
        <Card name="Project3" desc="Desc3"/>
        <Card name="Project4" desc="Desc4"/>
        </div>
    </div>
  )
}
