var imgArr = [
	{url: "http://i.imgur.com/Mo3fHAa.jpg"},
	{url: "http://i.imgur.com/fSSh7df.png"},
	{url: "http://i.imgur.com/ebMsSFY.png"},
	{url: "http://i.imgur.com/dCT18GU.jpg"},
	{url: "http://i.imgur.com/ZqoLvyD.jpg"},
	{url: "http://i.imgur.com/Wned0se.png"},
	{url: "http://i.imgur.com/aWW56UQ.png"},
	{url: "http://i.imgur.com/TgVwMGG.jpg"}
]

var Buzz = React.createClass({
    render() {
    	var imgs = imgArr.map(function(url) {
            return <img src={url}  />
        });
        return (
            <div className="buzz">
                <div className="buzz-title">{this.props.index}. {this.props.data.title}</div>
                <div className="imagess">
                	{imgs}
                </div>
            </div>
        );
    }
});

module.exports = Buzz;


