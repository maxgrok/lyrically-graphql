import gql from 'graphql-tag';

export default gql `
    query SongQuery($id: ID!){
        song(id: $id){
            id
            title
            lyrics{
                id  
                content
                likes
            }
        }
    }
`
//need the id of the lyrics for the key property for react list items