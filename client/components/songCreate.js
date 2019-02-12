import React, { Component } from 'react';

class SongCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }
    
    onChange(){
    }
    render(){
        return (
            <div>
                <h3>Create A New Song</h3>
                <form>
                    <label>Song Title: </label>
                    <input 
                    onChange={event=>{this.setState({ title: event.target.value })}}/>
                </form>
            </div>
        )
    }
}

export default SongCreate;
