import React from 'react';
import Card from './card';


const Cardlist = ({robots}) => {  // Destructuring is very IMP!
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