import React, { Component } from 'react'
import BlogListItem from './BlogListItem';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions/blogActions';
export class BlogLists extends Component {

  componentWillMount(){
      this.props.fetchBlogs();
  }  
  
  render() {
    let blogItems;
     console.log(this.props.blogs);
    if(this.props.blogs.length > 0){

        
    blogItems = this.props.blogs.map(blog => {

        return(
            <BlogListItem key={blog.id} blog={blog}/>
        )
    })
    }
    
    return (
        <div className="ui items">


            {blogItems}
            
        </div>   
    )
  }
}
const mapStateToProps = state => ({
    
    blogs : state.blogs.blogs
})
export default connect(mapStateToProps,{ fetchBlogs })(BlogLists)
