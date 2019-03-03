import React, { Component } from 'react';
import Previewer from './Previewer'

export default class Text_editor extends React.Component{
    constructor(props){
      super(props)
      
      this.state = {
        input:'',
        view:''
      }
      this.handleChange = this.handleChange.bind(this)
    }
      
      handleChange(e){            
        this.setState({
          input:e.target.value
        })
      }
    
    render(){
      return (
        <div>
          <div className="container main-container">
            <div className="editor-container">
              <div className="editor-header bg-secondary text-white">Markdown Previewer Editor</div>
                <textarea className="form-control form-control-lg" id="editor" type="text" placeholder="test" onChange={this.handleChange} value={this.state.input} />
              </div>
              <Previewer test={this.state.input}/>
          </div>
        </div>
      )
    }
  }


   
  