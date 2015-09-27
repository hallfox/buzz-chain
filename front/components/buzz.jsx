var Buzz = React.createClass({
    render() {
        console.log("In buzz", this.props);
        return (
            <div className="buzz">
                <div className="buzz-title">{this.props.index}. {this.props.data.title}</div>
                <img src={this.props.data.media} width="620" />
            </div>
        );
    }
});

module.exports = Buzz;
