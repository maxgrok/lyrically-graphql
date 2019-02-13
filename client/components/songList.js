// fetching list of songs and rendering them on the screen. 

import React, {Component} from 'react';
import gql from 'graphql-tag'; //helper that allows us to write queries within a component file
import { graphql } from 'react-apollo'; // react-apollo provides bonding layer between graphql server with react side of application
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component{
    onSongDelete(id){
        this.props.mutate({ variables: {id})
        .then(() => this.props.data.refetch()) //this.props.data is added automatically by apollo-react library, refetch function will automatically reexecute queries associated with the SongList component
    }

    renderSongs(){
        return this.props.data.songs.map(({id, title}) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i 
                    className="material-icons"
                    onClick={()=>{
                        this.onSongDelete(id)
                    }}>delete</i> 
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
    mutation DeleteSong($id: ID){
        deleteSong(id: $id){
            id
        }
    }
`

export default graphql(mutation)(
    graphql(query)(SongList) //syntax for adding multiple query/mutations for one component
)