import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'; 
import {Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

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
                title: this.state.title, //take the value out of the input and take it to the title and then pass that into the mutation
                refetchQueries: [{ query }] //refetches queries after the mutation has been successfully completed
            }
        }).then(()=>{
            hashHistory.push('/') //keeping track of history of user navigation
        });
    }
    render(){
        return (
            <div>
                <Link to="/">Back</Link>
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
