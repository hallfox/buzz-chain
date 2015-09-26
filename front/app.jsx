/*
  Article
  ├── ArticleTitle
  ├── Author
  ├── SocialMedia
  ├── Buzzes
  |   ├─ SubBuzz
  |   ├─ SubBuzz
  |   ├─ SubBuzz
  |   ├─ SubBuzz
  |   └─ SubBuzz
  ├── Social Media
  └── Footer
*/


var BUZZDATA = [
  {title: 'Pepe didn\'t eat dinner.', media: 'https://i.imgur.com/19lNyQ8h.jpg'},
  {title: 'Pepe didn\'t get good grades.', media: 'https://i.imgur.com/19lNyQ8h.jpg'},
  {title: 'Pepe didn\'t make friends.', media: 'https://i.imgur.com/19lNyQ8h.jpg'},
  {title: 'Pepe didn\'t make a difference.', media: 'https://i.imgur.com/19lNyQ8h.jpg'},
  {title: 'Pepe didn\'t matter.', media: 'https://i.imgur.com/19lNyQ8h.jpg'}
];

var Article = require('./components/article.jsx');

$(document).ready(function() {
  React.render(<Article buzzData={BUZZDATA} />, document.getElementById('buzz-chain'));
});
