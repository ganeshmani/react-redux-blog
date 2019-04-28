import React, { Component } from 'react'
import moment from 'moment';
export class BlogListItem extends Component {

   

   onUpvote = () => {
        
   }

  componentDidMount(){

  }
  render() {
    if(this.props.blog){

        return (
            <div className="item">
                <div className="image">
                    <img  src={this.props.blog.avatar} alt=""/>
                </div>
                <div className="content">
                    <a href="" className="header">{this.props.blog.name}</a>
    
                    <div className="meta">
                    <a className="heart" onClick={this.onUpvote}> <i className="fa fa-heart" aria-hidden="true"></i> </a>
                    <span className="price">0</span>
                    Date: {moment(this.props.blog.createdAt).format('DD-MMM-YY HH:mm:ss')}
                    <span className="stay"></span>
                    
                    </div>
    
                <div className="description">
                    <p>
                       {this.props.blog.description} 
                    </p>
                </div>
                </div>
            </div>
        )
       
    }  
   
  }
}

export default BlogListItem
