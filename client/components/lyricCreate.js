import React, {Component} from 'react';
import gql from 'graphql-tag';//allows us to write graphql queries directly in javascript code
import {graphql} from 'react-apollo'; //allows us to sandwich a query with a component

class LyricCreate extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: ''
        };
    }

    onSubmit(event){
        event.preventDefault();
        this.props.mutate({
            variables: {
                content: this.state.content, 
                songId: this.props.songId
            },
            refetchQueries: [{ fetchSong }]
        })
        this.setState({content: " "}); //instantly clears the form input field after submiting
    }

    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}> 
                <label>Add a Lyric</label>
                <input value={this.state.content} onChange={event => this.setState({content: event.target.value})} />
            </form>
        )
    }
}

const mutation = gql `
mutation AddLyricToSong($content: String, $songId: ID){
    addLyricToSong(content:$content, songId:$songId){
    id
    lyrics{
      content
    }
  }
}
`

export default graphql(mutation)(LyricCreate);