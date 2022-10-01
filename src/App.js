
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    /* content: null,
    author: null */
    /* image: null */
    person: null
  }
/* async componentDidMount() {
  const url ="https://api.quotable.io/random";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ content: data.content, author: data.author })
}*/
/* async componentDidMount(){
const url = "https://random.dog/woof.json";
const response = await fetch(url);
const data = await response.json();
this.setState({image: data.url}) 
}*/
async componentDidMount(){
  const url="https://api.randomuser.me/";
  const response= await fetch(url);
  const data= await response.json();
  this.setState({person: data.results[0]})
}
render() {
  return <div>
    {!this.state.person ? <p>Loading ...</p>:
    <div>
      <p>First Name: {this.state.person.name.first}</p>
      <p>Last Name: {this.state.person.name.last}</p>
      <p>Email: {this.state.person.email}</p>
      <img src={this.state.person.picture.large}/>
      </div>}
  </div>/*(
<div>
   <p>{this.state.content}</p>
 <p>{this.state.author}</p>  
</div> */
/* <img src={this.state.image} width="500px" alt="dog"/> 
  ); */

}
}

export default App;
