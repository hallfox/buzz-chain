var { SocialMedia, Footer } = require('./static.jsx');
var Buzz = require('./buzz.jsx');

var Article = React.createClass({
    render() {
        return (
            <div>
                <h1 class="article-title"></h1>
                <div class="author">
                    <div class="author-image"></div>
                    <div class="author-name"></div>
                    <p> BuzzFeed Staff</p>
                </div>
                <SocialMedia />
                <div class="buzz-list">
                    this.props.buzzData.forEach(function(buzz) {
                        return <Buzz data={buzz} />
                    });
                </div>
                <SocialMedia />
                <Footer />
            </div>
        );
    }
});

module.exports = Article;