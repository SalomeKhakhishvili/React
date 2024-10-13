import React from 'react'
import Card from './Card'
import LegolasImage from '../assets/Legolas.webp'
import AragornImage from '../assets/Aragorn.webp'
import GimliImage from '../assets/Gimli.webp'
import GandalfImage from '../assets/Gandalf.webp'

const data = [
    {id:1, name: "Legolas", image: LegolasImage}, 
    {id:2, name: "Aragorn", image: AragornImage}, 
    {id:3, name: "Gimli", image: GimliImage}, 
    {id:4, name: "Gandalf", image: GandalfImage}, 

]
  

const CardList = () => {
   function action (name) {
    alert (`this is an action from ${name}`)
   }
  return (
    <div className="card-list"> 
       {data.map((card) => <Card key={card.id} name={card.name}image={card.image}action={action}/>)}


        {/* <Card name= "Legolas" image={LegolasImage} action= {action}/> 
        <Card name= "Aragorn" image= {AragornImage} action= {action} /> 
        <Card name= "Gimli" image={GimliImage} action= {action}/> 
        <Card name= "Gandalf" image={GandalfImage} action= {action} />  */}
    </div>
  )
}

export default CardList