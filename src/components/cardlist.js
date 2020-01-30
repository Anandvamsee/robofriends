import React from 'react';
import Card from './card';


const Cardlist = ({robots}) => {  // Destructuring is very IMP!
    /* Code to check if the ErrorBoundary component is working! 
    if (true){
        throw new Error('Nooooooo!')
    }*/ 
    return (
        <div>
        { // specifies that the code below has to be evaluated as a JS expression!
            robots.map((user,i)=>{
                return (
                    <Card 
                    key={i} 
                    id = {robots[i].id} 
                    name = {robots[i].name} 
                    email= {robots[i].email} 
                    />
                );
            })
        }
        </div>
    );
}


export default Cardlist;