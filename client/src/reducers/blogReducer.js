import { FETCH_BLOGS,ADD_BLOG } from '../actions/types';


const initialState = {
    blogs : [],
    blog : {}
}

export default function(state = initialState,action){
    console.log(typeof state.blogs);
    switch(action.type){
        case FETCH_BLOGS:
            console.log("reducer",action.payload);    
            return{
                ...state,
                blogs : action.payload.response
            };
        case ADD_BLOG:
            return{
                ...state,
                blogs: state.blogs.concat([action.payload.response])
            }    
        default:
            return state;    
    }
}