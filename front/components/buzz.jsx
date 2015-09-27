

var Buzz = React.createClass({
    render() {
    	
        console.log("In buzz", this.props);
        return (
            <div className="buzz">
                <div className="buzz-title">{this.props.index}. {this.props.data.title}</div>
                <img src={this.props.data.media} width:"620px"/>
                <div className="imagess"><img src={this.props.data.image.map}/></div>
            </div>
        );
    }
});

module.exports = Buzz;


