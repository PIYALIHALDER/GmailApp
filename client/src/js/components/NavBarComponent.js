var React=require('react');
var {Link} =require('react-router');

var NavBarComponent = React.createClass({
  render: function() {
    return (
      <div className="NavBarComponent">
      <nav className="navbar navbar-default">
  <div className="container-fluid">



    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">

        <li className=""><Link to="/">Home</Link></li>
<li className=""><Link to="/ginbox">Inbox</Link></li>
             <li className=""><Link to="/sentbox">Sent Items</Link></li>
      </ul>


    </div>
  </div>
</nav>
     </div>
    );
  }
  });





  module.exports=NavBarComponent;
