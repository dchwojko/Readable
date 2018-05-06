import {
    ADD_POST,
    DELETE_POST
} from '../actions'

const initialState = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0
      }
}

function posts (state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                [action.post.id]: action.post
            }
        }
        case DELETE_POST: {
            return state;// to do
        }
        default:
            return state;
    }
}