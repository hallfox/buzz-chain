var SocialMedia = React.createClass({
	render() {
        return (
            <div className='social-media'>
            	<a href="https://github.com/hallfox/buzz-chain" className="social-media-item">
                    Repository
				</a>
				<a href="https://devpost.com" className="social-media-item">
            		DevPost
				</a>
				<a href="https://github.com/octref" className="social-media-item">
            		Pine
				</a>
                <a href="https://github.com/hallfox" className="social-media-item">
                    Taylor
                </a>
                <a href="https://github.com/AvocadosConstant" className="social-media-item">
                    Tim
                </a>
                <a href="https://github.com/vishalrohra" className="social-media-item">
                    Vishal
                </a>
                <a href="https://github.com/wijagels" className="social-media-item">
                    Will
                </a>
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
