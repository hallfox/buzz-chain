var data = {
	title: "Something buzz stupid",
	author: {
		name: "Richard Stallman",
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
};

var Article = require('./components/article.jsx');

$(document).ready(function() {
    React.render(<Article buzzData={data} />, document.getElementById('buzz-chain'));
});
