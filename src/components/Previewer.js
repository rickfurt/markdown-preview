import React, { Component } from 'react';

export default class Previewer extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return (
        <div>
          <div id="preview-container">
            <div className="preview-header bg-secondary text-white text-center">Viewer</div>
            <div className="viewer-content text-center" id="preview">{this.props.test}</div>  
          </div>
        </div>
      )
    }
  }
  