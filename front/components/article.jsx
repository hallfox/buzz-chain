var { SocialMedia, Footer } = require('./static.jsx');
var Buzz = require('./buzz.jsx');

var imgArr = [
    "http://i.imgur.com/Mo3fHAa.jpg",
    "http://i.imgur.com/fSSh7df.png",
    "http://i.imgur.com/ebMsSFY.png",
    "http://i.imgur.com/dCT18GU.jpg",
    "http://i.imgur.com/ZqoLvyD.jpg",
    "http://i.imgur.com/QYPlmPQ.png",
    "http://i.imgur.com/aWW56UQ.png",
    "http://i.imgur.com/TgVwMGG.jpg"
];

var Article = React.createClass({
    render() {
        var buzzes = this.props.buzzData.buzzes.map(function(buzz, index) {
            return <Buzz data={buzz} index={index + 1} imgURL={imgArr[index]}/>
        });
        
        return (
            <div className="container">
                <div>
                    <img src={'http://i62.tinypic.com/2jcxcnp.png'} alt="logo" height="69" width="381"/>
                    <h1 className="article-title">{this.props.buzzData.title}</h1>
                    <div className="author">
                        <img className="author-image" src={this.props.buzzData.author.image}></img>
                        <div className="author-name">{this.props.buzzData.author.name}</div>
                        <p>BuzzFeed Staff</p>
                    </div>
                    <SocialMedia />
                </div>
                <div> </div>
                <div className="buzz-list">
                    {buzzes}
                </div>
                <SocialMedia />
                <Footer />
            </div>
        );
    }
});

module.exports = Article;
