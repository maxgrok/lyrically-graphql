// fetching list of songs and rendering them on the screen. 

import React, {Component} from 'react';
import gql from 'graphql-tag'; //helper that allows us to write queries within a component file
import { graphql } from 'react-apollo'; // react-apollo provides bonding layer between graphql server with react side of application
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
        console.log(this.props);
        if (this.props.data.loading){
            return (<div>Loading...</div>)
        }
        return (<ul className="collection"> 
        {this.renderSongs()}
        </ul>
        )
    }
}
const query = gql`
{
    songs{
      id
      title
    }
  }
`;

export default graphql(query)(SongList);