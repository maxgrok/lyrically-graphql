import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
class SongDetail extends Component{
    render(){
        console.log(this.props);

        return(
            <div>
                <h3>Song Detail</h3>
            </div>
        )
    }
}

export default graphql(fetchSong, { 
    options: (props) => {return { variables: { id: props.params.id }}}  //make a query for a particular record using information from the url
})(SongDetail);