import Constants from '../Constants';

export function getCategories () {
    fetch(`${Constants.url}/categories`, { headers: Constants.headers}, {method: Constants.methods.GET})
    .then((res) => res.json())
    .then((data) => {
        console.log('fetch getCategories complete');
    });
}

export function getPostsForCategory (category) {
    fetch(`${Constants.url}/${category}/posts`, { headers: Constants.headers}, {method: Constants.methods.GET})
    .then((res) => res.json())
    .then((data) => {
        console.log('fetch getPostsForCategory complete');
    });
}

export function getPosts() {
    var result = null;
    fetch(`${Constants.url}/posts`, { headers: Constants.headers}, {method: Constants.methods.GET})
    .then((res) => res.json())
    .then((data) => {
        console.log('fetch getPosts complete');
        console.log(data);
    });
}

export function addPost(title,body,author,category) {
    var timestamp = Date.now();
    const payload = JSON.stringify({
        'id': Math.floor(Math.random() * 1000000),
        'timestamp': timestamp,
        'title': title,
        'body': body,
        'author': author,
        'category': category
    });
    fetch(`${Constants.url}/posts`, {headers: Constants.headers, method: Constants.methods.POST, body: payload})
    .then((res) => res.json())
    .then((data) => {
        console.log('adding post')
    });
}

export function getPost(id) {
    fetch(`${Constants.url}/posts/${id}`, { headers: Constants.headers}, {method: Constants.methods.GET})
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch getPost(${id}) complete`);
    });
}

export function upvotePost(id) {
    const payload = JSON.stringify({
        'option': 'upVote'
    });
    fetch(`${Constants.url}}/comment/${id}`, { headers: Constants.headers}, {method: Constants.methods.POST}, { body: payload})
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch upvotePost(${id}) complete`);
    });
}

export function downvotePost(id) {
    const payload = JSON.stringify({
        'option': 'downVote'
    });
    fetch(`${Constants.url}}/comment/${id}`, { headers: Constants.headers}, {method: Constants.methods.POST}, { body: payload })
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch downvotePost(${id}) complete`);
    });
}

export function editPost(id,title,body) {
    var payload = null;
    if (title != null && body == null) {
        payload = JSON.stringify({
            'title': title
        });
    } else if (title == null && body != null) {
        payload = JSON.stringify({
            'body': body
        })
    } else if (title != null && body != null) {
        payload = JSON.stringify({
            'title': title,
            'body': body
        });
    } else {
        return;
    }
    fetch(`${Constants.url}/posts/${id}`, { headers: Constants.headers }, { method: Constants.methods.PUT }, { body: payload })
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch editPost for ${id} with ${title} | ${body} complete.`)
    });
}

export function deletePost(id) {
    fetch(`${Constants.url}/posts/${id}`, { headers: Constants.headers}, {method: Constants.methods.POST})
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch deletePost(${id}) complete`);
    });
}

export function getCommentsForPost(id) {
    fetch(`${Constants.url}/${id}/comments`, { headers: Constants.headers }, { method: Constants.methods.GET })
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch getCommentsForPost ${id}.`);
    });
}

export function addComment(body, author, parentId) {
    var timestamp = Date.now();
    const payload = JSON.stringify({
        'id': Math.floor(Math.random() * 1000000),
        'timestamp': timestamp,
        'body': body,
        'author': author,
        'parentId': parentId
    });
    fetch(`${Constants.url}/comments`, { headers: Constants.headers}, {method: Constants.methods.POST}, {body: payload})
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch addComment ${body} ${author} ${parentId}.`);
    });
}

export function getComment(id) {
    fetch(`${Constants.url}}/comment/${id}`, { headers: Constants.headers}, {method: Constants.methods.GET})
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch getComment (${id}) complete`);
    });
}

export function upvoteComment(id) {
    const payload = JSON.stringify({
        'option': 'upVote'
    });
    fetch(`${Constants.url}}/comment/${id}`, { headers: Constants.headers}, {method: Constants.methods.POST}, { body: payload })
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch upvoteComment(${id}) complete`);
    });
}

export function downvoteComment(id) {
    const payload = JSON.stringify({
        'option': 'downVote'
    });
    fetch(`${Constants.url}}/comment/${id}`, { headers: Constants.headers}, {method: Constants.methods.POST}, { body: payload} )
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch upvoteComment(${id}) complete`);
    });
}

export function editComment(id, body) {
    const payload = JSON.stringify({
        'body': body
    });
    fetch(`${Constants.url}}/comment/${id}`, { headers: Constants.headers}, {method: Constants.methods.PUT}, { body: payload })
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch editComment (${id}, ${body}) complete`);
    });

}

export function deleteComment(id) {
    fetch(`${Constants.url}}/comment/${id}`, { headers: Constants.headers}, {method: Constants.methods.POST})
    .then((res) => res.json())
    .then((data) => {
        console.log(`fetch deleteComment(${id}) complete`);
    });
}

/*
| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /categories` | Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire. |  |
| `GET /:category/posts` | Get all of the posts for a particular category. |  |
| `GET /posts` | Get all of the posts. Useful for the main page when no category is selected. |  |
| `POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br> **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** - [String] <br> **body** - [String] <br> **author** - [String] <br> **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |

| `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |





| `POST /comments/:id` | Used for voting on a comment. | **option** - [String]: Either `"upVote"` or `"downVote"`.  |


*/
