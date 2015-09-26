var App = require('./components/main.jsx');

$(document).ready(function() {
  React.render(<App />, document.getElementById('buzz-chain'));
});
