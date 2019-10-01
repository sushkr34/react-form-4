import React from 'react';

// import Button from '../Button'
// import Card from '../Card'
// import Cards from '../Cards'
// import RadioGroup from '../RadioGroup'
// import Header from '../Header'
// import TextField from '../TextField'

const Flexi =({config,handleChange, onFlexiSubmit })=>{
    console.log(config)
    let items = config.items;

     let getChild = items =>{
         return items.map (e =>{
             return displayField (e);
         });
     };
    
     
     const displayField = e =>{
         let child=[];
         if(e.children){
             child =getChild(e.children.items);
         }
         let Components = require (`../AllComponents/${e.type}`).default;
         return (
             <Components 
             props={e.props}
             child={child}
             onFlexiSubmit={onFlexiSubmit}
             handleChange={handleChange}
             />
         )
         
             
            //  switch (e.type){
            //      case "Card":
                     
            //          return <Card props ={e.props} child={child} />;
                       
            //     case "Cards" :
            //             return <Cards props = {e.props}/>;
                        
            //     case "Header" :
            //         return <Header props = {e.props}/>;
                        
            //     case "TextField" :
            //         return <TextField props = {e.props} handleChange={handleChange}/>
            //     case "Button" :
            //         return <Button props ={e.props} onFlexiSubmit={onFlexiSubmit}/>
            //     case "RadioGroup" :
            //         return <RadioGroup props= {e.props} handleChange={handleChange}/>
            //     default :
            //         return null;
            //  }
         
     }
     return <div>{getChild (items )}</div>
}
export default Flexi;