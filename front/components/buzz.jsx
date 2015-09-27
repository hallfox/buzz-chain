var Buzz = React.createClass({
    render() {
        return (
            <div className="buzz">
                <div className="buzz-title">{this.props.index}. {this.props.data.title}</div>
                <div className="imagess"><img src={this.props.data.images[0]}/></div>
            </div>
        );
    }
});

module.exports = Buzz;


