import { FETCH_BLOGS,ADD_BLOG } from './types';


export const fetchBlogs = () => dispatch => {
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(blogs => 
        
        dispatch({
            type: FETCH_BLOGS,
            payload : blogs
        }));
};

export const addBlog = blogData => dispatch => {
    
    fetch('http://localhost:3000/post', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(blogData)
  })
    .then(res => res.json())
    .then(blog =>
      dispatch({
        type: ADD_BLOG,
        payload: blog
      })
    );

};