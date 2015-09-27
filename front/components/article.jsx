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
                    <img src={'http://i60.tinypic.com/aorl7s.png'} alt="logo" height="59" width="379"/>
                    <h1 className="article-title">5 Things the Pope Hates About Node.js</h1>
                    <div className="author">
                        <div className="author-image"></div>
                        <div className="author-name">Richard Stallman</div>
                        <p> BuzzFeed Staff</p>
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
