//Creating a clock by re-rendering the entire Clock element every second. (Very slow)

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
}

function tick(){
    ReactDOM.render(<Clock/>, document.body);
}

setInterval(tick, 1000);