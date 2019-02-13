// fetching list of songs and rendering them on the screen. 

import React, {Component} from 'react';
import gql from 'graphql-tag'; //helper that allows us to write queries within a component file
import { graphql } from 'react-apollo'; // react-apollo provides bonding layer between graphql server with react side of application
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component{
    renderSongs(){
        return this.props.data.songs.map(song => {
            return (
                <li key={song.id} className="collection-item">
                    {song.title} 
                </li>
            )
        });
    }
//styling from materialize.css that is already included
    render(){
        if (this.props.data.loading){
            return (<div>Loading...</div>)
        }
            return (
            <div>
                <ul className="collection"> 
                    {this.renderSongs()}
                </ul>
                <Link 
                    to="songs/new" 
                    className="btn-floating btn-large red right"
                >
                <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

const mutation = gql`
    mutation DeleteSong($id: String){
        deleteSong(id: $id){
            id
        }
    }
`

export default graphql(mutation){
    graphql(query)(SongList) //syntax for adding multiple query/mutations for one component
}