var Buzz = React.createClass({
    render() {
        console.log("In buzz", this.props);
        return (
            <div className="buzz">
                <div className="buzz-title">{this.props.index}. {this.props.data.title}</div>
                <div className="imagess"><img src={this.props.data.media}/></div>
            </div>
        );
    }
});

module.exports = Buzz;

@media (min-width:500px){imagess{width:"620px"}}
@media (max-width:499px){imagess{width:100%}}
