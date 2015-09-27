var SocialMedia = React.createClass({
	render() {
        return (
            <div className='social-media'>
            	<a href="https://github.com/hallfox/buzz-chain" className="social-media-item" id="sm-repo">
                    Repository
				</a>
				<a href="https://devpost.com" className="social-media-item" id="sm-devpost">
            		DevPost
				</a>
				<a href="https://github.com/octref" className="social-media-item" id="sm-pine">
            		Pine
				</a>
                <a href="https://github.com/hallfox" className="social-media-item" id="sm-tay">
                    Taylor
                </a>
                <a href="https://github.com/AvocadosConstant" className="social-media-item" id="sm-tim">
                    Tim
                </a>
                <a href="https://github.com/vishalrohra" className="social-media-item" id="sm-vish">
                    Vishal
                </a>
                <a href="https://github.com/wijagels" className="social-media-item" id="sm-will">
                    Will
                </a>
			</div>
        );
    }
});

var Footer = React.createClass({
	render() {
        return (
            <div class="container-fluid" className="footer-title">
                <footer>
                <p>'Created at HackNY Fall\'15. Praise the lord'</p>
                <p>'PepeTheFrog'</p>
                </footer>
            </div>
        );
    }
});

module.exports = {
	SocialMedia,
	Footer
};
