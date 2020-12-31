

class Person extends React.Component{
    render(){
        var name = this.props.name;
        var age = this.props.age;
        var hobbies = this.props.hobbies
        if(name.length > 8){
            name = name.slice(0,6);
        }
        var myHobby = hobbies.map((hobby,index)=>{
            return <li key={index}>{hobby}</li>
        })
        return(
            <div>
                <h2>{name}</h2>
                <p>Learn some information about this person</p>
                {age > 21 ?(
                    <h3>Have a drink</h3>
                ):(<h3>You must be 21</h3>)}

                {myHobby}
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Person name ='Opeyemi' age= '20' hobbies={["Reading", "Swimming", "Coding"]}/>
                <Person name ='Oluwatobi' age= '29'  hobbies={["Dancing", "Singing", "Gaming"]}/>
                <Person name ='Emmanuel' age= '19'  hobbies={["Reading", "Cooking", "Coding"]}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));


// import React from 'react';


// class Person extends React.Component {
//     render () {
//         let name = this.props.name;
//         let age = this.props.age;
//         let hobbies = this.props.hobbies;

//         if (name.length > 8) {
//             name = name.substring(0, 6);
//         }

//         var myHobby = hobbies.map((hobby, index) => {
//             return <li key={index}>{hobby}</li>
//         })
//         return (
//             <div>
//                 <h2>{name}</h2>
//                 <p>Learn some information about this person.</p>
//                 {age > 21 ? (<h3>Have a drink</h3>)
//                 : (<h3>You must be 21</h3>)}
                
//                 {myHobby}
//             </div>
//         )
//     }
// }

// export default Person;