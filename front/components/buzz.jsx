var Buzz = React.createClass({
    render() {
        return (
            <div className="buzz">
                <div className="buzz-title">{this.props.index}. {this.props.data.title}</div>
                <img src={imgURL} />
            </div>
        );
    }
});

module.exports = Buzz;


