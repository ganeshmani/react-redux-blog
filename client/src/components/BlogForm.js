import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addBlog} from '../actions/blogActions';
import * as faker from 'faker'
export class BlogForm extends Component {


  constructor(props){
      super(props);

      this.state = {
          name : '',
          description : ''
      }

    //   this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }  
   
  componentDidMount(){


  }

  onChange = (e) => {
      this.setState({ [e.target.name] : e.target.value});
  }
  
  onSubmit(){

    this.setState({
        name : '',
        description : ''
    })
    const post = {
        name : this.state.name,
        avatar : faker.image.avatar(),
        description : this.state.description
    }

    console.log(post);

    this.props.addBlog(post);
  }


  render() {
    return (
     <div className="ui segment">
     
      <div className="ui form">

        <div className="field">
            <label>
                Post Title
            </label>
            <input type="text" name="name" onChange={this.onChange} value={this.state.name}>
            </input>
        </div>

        <div className="field">
                <label>Description</label>
                <textarea placeholder="enter a post body" name="description" onChange={this.onChange} value={this.state.description}></textarea>
        </div>
        
        <div className="field">
            <input className="ui primary button" onClick={this.onSubmit} type="button" value="Add Post"/>
        </div>
      </div>
      </div>   
    )
  }
}




export default connect(null,{ addBlog })(BlogForm)
