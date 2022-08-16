import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/client';

const BOOK_LIST_QUERY = gql`
    query {
        books {
            id
            name
            genre
            author {
                id
                name
                age
            }
        }
    }
`;


const BookList = () => {
    const displayBooks = () => {
        const { books } = this.props.data;
        // //dummy books
        // const books = [
        //     {
        //         id: '1',
        //         name: 'Name of the Wind',
        //         genre: 'Fantasy',
        //     }
        // ];
        if (books) {
            return books.map(book => {
                return (
                    <li key={book.id}>{book.name}</li>
                );
            }).reverse();
        } else {
            return <div>Loading...</div>;
        }
    }           

    return (
        <div>
            <h1>Reading List</h1>
            <ul>
                {displayBooks()}
            </ul>
        </div>
    );
}

export default BookList;
