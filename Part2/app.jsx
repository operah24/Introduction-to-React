class Tweet extends React.Component{
    render(){
        return(
            <div>
                <h2>UserName:<span>{this.props.username}</span></h2>
                <h4>Name: <span>{this.props.user}</span></h4>
                <h4>Date:<span>{this.props.date}</span></h4>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Tweet username='Banta_Operah' user='Opeyemi' date='4/12/2020'>My very first Tweet.</Tweet>
                <Tweet username='Operah' user='Esther' date='5/12/2020'>This is my time to shine</Tweet>
                <Tweet username='Tee' user='Tobi' date='6/12/2020'>I love to code.</Tweet>
                <Tweet username='Queen' user='Mary' date='7/12/2020'>Merry Christmas and Happy New Year in advance</Tweet>
            </div>
        )
    }
}




ReactDOM.render(<App />, document.getElementById('app'));

