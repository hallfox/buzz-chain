var Buzz = React.createClass({
    render() {
        console.log("In buzz", this.props);
        return (
            <div className="buzz">
                <div className="buzz-title">{this.props.index}. {this.props.data.title}</div>
                <className="images" img src={this.props.data.media} />
            </div>
        );
    }
});

module.exports = Buzz;
