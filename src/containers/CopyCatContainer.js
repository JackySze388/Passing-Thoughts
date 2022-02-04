import React from 'react';
//import ReactDOM from 'react-dom';
import {CopyCat} from '../components/CopyCat';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: 'ABC'
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
        input: e.target.value
      });
    // Should we add this ,...this.state
    //alert(e.target.value);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const input = this.state.input;
    const handleChange = this.handleChange;
    
    return <CopyCat copying={copying} toggleTape={toggleTape} 
    input={input} onChange={handleChange} copyCatName='Tom Cat'/>;
  };
}


//ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));