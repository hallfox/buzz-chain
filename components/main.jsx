var App = React.createClass({
  render: function() {
    return <div>Hello buzz-chain</div>;
  }
});

$(document).ready(function() {
  React.render(<App />, document.getElementById('buzz-chain'));
});
