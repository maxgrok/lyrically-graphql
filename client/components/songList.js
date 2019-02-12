// fetching list of songs and rendering them on the screen. 

import React, {Component} from 'react';
import gql from 'graphql-tag'; //helper that allows us to write queries within a component file
import { graphql } from 'react-apollo'; // react-apollo provides bonding layer between graphql server with react side of application
class SongList extends Component{
    renderSongs(){
        return this.props.data.songs.map(song => {
            return (
                <li>
                    {song.title}
                </li>
            )
        });
    }

    render(){
        return (<div>
            {this.renderSongs()}
        </div>
        )
    }
}
const query = gql`
{
    songs{
      title
    }
  }
`;

export default graphql(query)(SongList);