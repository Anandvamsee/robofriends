import React, {Component} from 'react';
import Cardlist from '../components/cardlist';
//import {robots} from './robots'; ---- NOT needed anymore
import SearchBox from '../components/SearchBox'
import './app.css';
import Scroll from '../components/Scroll';




class App extends Component {
    constructor(){
        super()  // super calls the constructor of the component. Hence mandatory!
        this.state = {
            robots: [],
            searchfield: ''
        }

    }

onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});  /// this gives the value of the target event
        console.log(event.target.value);
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}));
}    
    render() {
        const {robots,searchfield} = this.state; // prettyfying the code.. That is all!
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
    if (!robots.length){  // this expression by default evaluates to if the robots array has some length. Hence ! means if the robots awway has no length, return loading
        return (
            <h1>Loading...</h1>
        )
    }
    else {
    return (
        
        <div className = 'tc'>  
            <h1 className='f1'>RoboFriends</h1> 
            <SearchBox  searchChange = {this.onSearchChange}/> 
            <Scroll>
                <Cardlist robots = {filteredRobots}/>
            </Scroll>
        </div>
        );
    }
}
}





export default App;