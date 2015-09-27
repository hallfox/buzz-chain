var BUZZDATA = [

  {title: 'Pepe didn\'t eat dinner.', media: 'https://i.imgur.com/19lNyQ8h.jpg'},
  {title: 'Pepe didn\'t get good grades.', media: 'http://i.imgur.com/ebMsSFY.png'},
  {title: 'Pepe didn\'t make friends.', media: 'http://i.imgur.com/dCT18GU.jpg'},
  {title: 'Pepe didn\'t make a difference.', media: 'http://i.imgur.com/fSSh7df.png'},
  {title: 'Pepe didn\'t matter.', media: 'http://i.imgur.com/Mo3fHAa.jpg'}
];

var data = {
	title: "Something buzz stupid",
	author: {
		name: "Pine",
		image: "RS.png"
	},
	buzzes: [
		{
			title: 'Pepe didnt eat dinner',
			images: [
				"http://i.imgur.com/Mo3fHAa.jpg"
			],
			desc: "Some stupid image"
		}
	]

}

var Article = require('./components/article.jsx');

$(document).ready(function() {
  React.render(<Article buzzData={data} />, document.getElementById('buzz-chain'));
});

/*
Article
├── ArticleTitle
├── Author
├── Social Media
├── Buzzes
|   ├─ SubBuzz
|   ├─ SubBuzz
|   ├─ SubBuzz
|   ├─ SubBuzz
|   └─ SubBuzz
├── Social Media
└── Footer
*/