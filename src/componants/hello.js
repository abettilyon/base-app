
import React from 'react';
import ReactRouter from 'react-router'


var browserHistory = ReactRouter.browserHistory;





var MainLayout = React.createClass({
  render: function(){
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside"></aside>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/widgets">Widgets</Link></li>
        </ul>

        <main>
           {this.props.children}
        </main>
      </div>
    );
  }
});

var SearchLayout = React.createClass({
  render: function(){
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
    )
  }
});

var UserList = React.createClass({
  render: function(){
    return(
      <ul className="user-list">
        <li>Me</li>
        <li>You</li>
        <li>Them</li>
        </ul>
      );
  }
});

var Home = React.createClass({
  render: function(){
    return(<div>THIS IS HOME</div>);
  }
});



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route component={SearchLayout}>
        <Route path="users" component={UserList} />
        <Route path="widgets" component={WidgetList} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
