var SocialMedia = React.createClass({
	render() {
        return (
            <div>
            	<div class="social-media-container">
            		Facebook
				</div>
				<div class="social-media-container">
            		Github
				</div>
				<div class="social-media-container">
            		DevPost
				</div>
			</div>
        );
    }
});

var Footer = React.createClass({
	render() {
        return (
            <div>
            	This is the footer.
			</div>
        );
    }
});

module.exports = {
	SocialMedia,
	Footer
};