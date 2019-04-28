import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import  store from './store';
import  BlogForm from './components/BlogForm';
import  BlogLists from './components/BlogLists';
function App() {
  return (
    <Provider store={ store }>
    <div className="ui grid">
     <div className="center aligned two column row">
      <div className="wide column ">
          <BlogForm />  
      </div>
      <div className="wide column scrollable-blogs">
          <BlogLists />
      </div>

      </div>
      
    </div>
    </Provider>
  );
}

export default App;
