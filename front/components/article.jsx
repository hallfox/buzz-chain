var { SocialMedia, Footer } = require('./static.jsx');
var Buzz = require('./buzz.jsx');

var Article = React.createClass({
    render() {
        var buzzes = this.props.buzzData.map(function(buzz) {
            return <Buzz data={buzz} />
        });
        
        return (
            <div className="container">
                <div>
                    <p>BuzzFeed Logo</p>
                    <h1 className="article-title"></h1>
                    <div className="author">
                        <div className="author-image"></div>
                        <div className="author-name"></div>
                        <p> BuzzFeed Staff</p>
                    </div>
                    <SocialMedia />
                </div>
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
