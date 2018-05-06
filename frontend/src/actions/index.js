// String constants
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

// Action creators
export function addPost({ id, timestamp, title, body, author, category}) {
    return {
        type: ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category
    }
}

export function deletePost({ id }) {
    return {
        type: DELETE_POST,
        id
    }
}