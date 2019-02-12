import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'; 
class SongCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }
    
    onSubmit(event){
        event.preventDefault();

        //reach out to backend server and add a new song to collection
        // mutation needed
        this.props.mutate({
            variables: {
                title: this.state.title //take the value out of the input and take it to the title and then pass that into the mutation
            }
        })
    }
    render(){
        
        return (
            <div>
                <h3>Create A New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title: </label>
                    <input 
                    onChange={event=>{this.setState({ title: event.target.value })}}
                    value={this.state.title}/>
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation addSong($title: String){
        addSong(title: $title){
            title
        }
    }

`

export default graphql(mutation)(SongCreate);;
