import { v4 as uuidv4 } from 'uuid';

let posts = [];


export const getPosts = (req, res) => {
    res.send(posts);
}

export const createPost = (req, res) => {
    const post = req.body;
    posts.push({ ...post, id: uuidv4() });
    res.send(`post about ${post.title} is added`);
}

export const getPostById = (req, res) => {
    const { id } = req.params;
    const foundPost = posts.find((post) => post.id === id);
    res.send(foundPost);
}

export const deletePost = (req, res) => {
    const { id } = req.params;
    posts = posts.filter((post) => post.id !== id);
    res.send(`post with id ${id} is deleted`);

}

export const updatePost = (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    const post = posts.find((post) => post.id === id);

    if (title) post.title = title;
    if (title) post.title = title;

    res.send(`post with id ${id} is updated`);

}