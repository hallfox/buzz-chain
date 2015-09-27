var { SocialMedia, Footer } = require('./static.jsx');
var Buzz = require('./buzz.jsx');

var Article = React.createClass({
    render() {
        var buzzes = this.props.buzzData.map(function(buzz) {
            return <Buzz data={buzz} />
        });
        
        return (
            <div class="container">
                <div>
                    <h1>BuzzChain Logo goes here</h1>
                    <h1 className="article-title">9 Things the Pope Hates About Node.js.</h1>
                    <div className="author">
                        <div className="author-image"></div>
                        <div className="author-name">Vishal Rohra</div>
                        <p> BuzzFeed Staff</p>
                    </div>
                    <SocialMedia />
                </div>
                <br>
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
