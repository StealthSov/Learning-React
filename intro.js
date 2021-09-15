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
const elFunc = <WelcomeFunc name="Max2" />

ReactDOM.render(elFunc, document.body);

