// Main Entry point to the React App

require("!style!css!./css/style.css");

import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

var MainLayout = React.createClass({
  render: function(){
    return (
      <div className="app" width='50%' align='center'>
        <p>Basic React Router app</p>

        <Link to="/">Home</Link>
        { "  " }
        <Link to="/page1">Page 1</Link>
        { "  " }
        <Link to="/page2">Page 2</Link>

        <hr />
        <main>
           {this.props.children}
        </main>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function(){
    return(<div>THIS IS HOME</div>);
  }
});


var Page1 = React.createClass({
  render: function(){
    return(<div>PAGE 1</div>);
  }
});

var Page2 = React.createClass({
  render: function(){
    return(<div>PAGE 2</div>);
  }
});


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
), document.getElementById('root'));
