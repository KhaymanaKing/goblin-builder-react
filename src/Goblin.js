import React from 'react';

export default function Goblin({
  goblinFormName,
  goblinFormColor,
  goblinFormHp,
  handleDeleteGoblin
}) 

{
  return (
    // be sure you take a look at this component i'm handing you and figure out what props it will need to work correctly.
    <div 
      className='goblin' 
      onClick={() => props.handleDeleteGoblin && props.handleDeleteGoblin(props.goblin.name)}>
      <h3>{goblinFormName.goblin.name}</h3>  
      <img src="goblin.png" style={{ backgroundColor: goblinFormColor.goblin.color }} />
      <p>{goblinFormHp.goblin.hp} HP</p>
    </div>
  );
}
