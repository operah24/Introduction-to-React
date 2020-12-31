class FirstComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>My very first component.</h1>
               
            </div>
        )
    }
}


class SecondComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>My second component.</h1>
                
            </div>
        )
    }
}

class NamedComponent extends React.Component{
    render(){
        return(
            <div>
                <p>My name is {this.props.name}.</p>
            </div>
        )
    }
}










ReactDOM.render(<FirstComponent /> , document.getElementById('app'))
ReactDOM.render(<SecondComponent />, document.getElementById('secondComponent'))
ReactDOM.render(<NamedComponent name="Opeyemi" />, document.getElementById('namedComponent'))