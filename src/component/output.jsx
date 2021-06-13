import React, { Component } from 'react';

class Output extends Component {
    state = {  }
    render() { 
        return ( 
             <iframe
                    id="iFrame"
                    srcDoc={this.props.code}
                    title="output"
                    font="white"
                    width="100%"
                    height="100%"
                  >
                  </iframe>
       );
    }
}
 
export default Output;