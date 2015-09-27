var Buzz = React.createClass({
    render() {
        return (
            <div className="buzz">
                <div className="buzz-title">{this.props.index}. {this.props.data.title}</div>
                <div className="imagess"><img src="http://i.imgur.com/Mo3fHAa.jpg"/></div>
            </div>
        );
    }
});

module.exports = Buzz;


