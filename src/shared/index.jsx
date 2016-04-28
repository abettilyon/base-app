import React from 'react';
//import Home from 'components';


export default class App extends React.Component {

  render(){
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
    )
  }

}
