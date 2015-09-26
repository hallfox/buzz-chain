var SocialMedia = React.createClass({
	render() {
        return (
            <div className='social-media'>
            	<div className="social-media-item">
            		Facebook
				</div>
				<div className="social-media-item">
            		Github
				</div>
				<div className="social-media-item">
            		DevPost
				</div>
			</div>
        );
    }
});

var Footer = React.createClass({
	render() {
        return (
            <footer>This is the footer.</footer>
        );
    }
});

module.exports = {
	SocialMedia,
	Footer
};
