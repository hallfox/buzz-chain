var Article = React.createClass({
    render: function() {
        return (
            <div>
                <ArticleTitle />
                <Author />
                <SocialMedia />
                <Buzzes buzzes={this.props.buzzData} />
                <SocialMedia />
                <Footer />
            </div>
        );
    }
});

module.exports = Article;
