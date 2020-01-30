import React from 'react';
import 'tachyons';


const Card = ({name, email, id}) => {  // id , name, email - they are all properties. Hence destructring ... remember JSX!
    return (
        <div className= "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 hover-bg-yellow">
            <img src = {`https://robohash.org/${id}?set=set5?200x200`}></img>
            <div>
                <h2>ID: {id} </h2>  
                <h2> Name: {name} </h2>
                <p> E-Mail Id: {email} </p>
            </div>
        </div>
    );
}

export default Card;