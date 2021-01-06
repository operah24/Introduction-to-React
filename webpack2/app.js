import Person from './Person';
import React from 'react';
import ReactDOM from 'react-dom'

// class App extends React.Component {
//     render() {
        
//         return (
//             <div>
//                 <Person name ='Opeyemi' age= '20' hobbies={["Reading", "Swimming", "Coding"]} />
//                 <Person name ='Oluwatobi' age= '29'  hobbies={["Dancing", "Singing", "Gaming"]} />
//                 <Person name ='Emmanuel' age= '19'  hobbies={["Reading", "Cooking", "Coding"]} />
//             </div>
//         )
//     }
// }
const App = ()=>{
    return (
        <div>
            <Person name ='Opeyemi' age= '20' hobbies={["Reading", "Swimming", "Coding"]} />
            <Person name ='Oluwatobi' age= '29'  hobbies={["Dancing", "Singing", "Gaming"]} />
            <Person name ='Emmanuel' age= '19'  hobbies={["Reading", "Cooking", "Coding"]} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));
