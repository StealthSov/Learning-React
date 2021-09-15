//Creating a clock by re-rendering the entire Clock element every second. (Very slow)

function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
}

function tick(){
    ReactDOM.render(<Clock date={new Date()}/>, document.body);
}

setInterval(tick, 1000);