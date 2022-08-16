import React from 'react';
import { graphql } from '@apollo/client';
import gql from 'graphql-tag';

const ADD_BOOK_MUTATION = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
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

const AddBook = () => {
    const displayAuthors = () => {
        const { authors } = this.props.data;
        // //dummy authors
        // const authors = [
        //     {
        //         id: '1',
        //         name: 'John Doe',
        //         age: '45'
        //     }
        // ];
        if (authors) {
            return authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                );
            }).reverse();
        } else {
            return <div>Loading...</div>;
        }
    }

    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option value="">Select author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
}

export default AddBook;
