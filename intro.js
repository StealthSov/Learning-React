//Creating a component using the React.Component class
class Welcome extends React.Component {
    render(props) {
        return <div>Welcome {this.props.name}!</div>
    }
}
const element = <Welcome name="Max"/>

//Creating a component using function syntax
function WelcomeFunc(props) {
    return <div>Welcome {props.name}</div>
}

function App(){
    return (<div>
        <WelcomeFunc name="Test1" />
        <WelcomeFunc name="Test2" />
        <WelcomeFunc name="Test3" />
    </div>);
}

ReactDOM.render(<App />, document.body);

