// fetching list of songs and rendering them on the screen. 

import React, {Component} from 'react';
import gql from 'graphql-tag'; //helper that allows us to write queries within a component file

class SongList extends Component{
    render(){
        return (<div>
            SongList
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

export default SongList;