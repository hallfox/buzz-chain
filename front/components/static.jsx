var SocialMedia = React.createClass({
	render() {
        return (
            <div className='social-media'>
            	<a href="https://github.com/hallfox/buzz-chain" className="social-media-item" style={{background:#181818}}>
                    Repository
				</a>
				<a href="https://devpost.com" className="social-media-item" style={{background:#13E53}}>
            		DevPost
				</a>
				<a href="https://github.com/octref" className="social-media-item" style={{background:red}}>
            		Pine
				</a>
                <a href="https://github.com/hallfox" className="social-media-item" style={{background:orange}}>
                    Taylor
                </a>
                <a href="https://github.com/AvocadosConstant" className="social-media-item" style={{background:green}}>
                    Tim
                </a>
                <a href="https://github.com/vishalrohra" className="social-media-item" style={{background:blue}}>
                    Vishal
                </a>
                <a href="https://github.com/wijagels" className="social-media-item" style={{background:purple}}>
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
