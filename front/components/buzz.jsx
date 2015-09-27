var Buzz = React.createClass({
    render() {
        console.log("In buzz", this.props);
        return (
            <div>
                <div className="buzz-title">{this.props.data.title}</div>
                <img src={this.props.data.media} />
            </div>
        );
    }
});

module.exports = Buzz;
