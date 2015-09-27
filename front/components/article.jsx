var { SocialMedia, Footer } = require('./static.jsx');
var Buzz = require('./buzz.jsx');

var Article = React.createClass({
    render() {
        var buzzes = this.props.buzzData.buzzes.map(function(buzz, index) {
            return <Buzz data={buzz} index={index + 1} />
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
