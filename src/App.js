import './App.css';
import React from "react";
import img1 from './image/51MGN27RJ1L.jpg';
import img2 from './image/aint-no-grave.webp';

export default class App extends React.Component{
  render(){  
    let name="Johnny Cash";
    let albums =["American VI: Ain't No Grave","American IV: The Man Comes Around","American III: Solitary Man"];
    return(
      <div className="App">
        <h1>{name}</h1>
        <h3>Albums: </h3>
        <ul>     
    {albums.map(function(item) {       
      return <li key={item}>{item}</li>;     
    })}
<img src={img1} alt={"img1"}></img>
<img src={img2} alt={"img2"}></img>

  </ul> 
      </div>
    )
  }
}