import React from 'react'
import Card from '../components/card'

export default function vote() {

    const st={
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100vw",
        height:"100vh"
    }
  return (
    <div>
        <h2>Cast your vote</h2>
        <div style={st}>
        <Card name="Project1" desc="Desc1"/>
        <Card name="Project2" desc="Desc2"/>
        <Card name="Project3" desc="Desc3"/>
        <Card name="Project4" desc="Desc4"/>
        </div>
    </div>
  )
}
