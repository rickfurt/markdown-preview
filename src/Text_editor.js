import React, { Component } from 'react';

const marked = require("marked");

export default class Text_editor extends React.Component{
    constructor(props){
      super(props)
      
      this.state = {
        input:'',
        markdown:'# Header \n \n\n ## Sub-header \n-----------\n  ``` console.log() ``` \n-----------\n \n ``` \n function Test(){\n multi-line code \n} \n ```  \n### Another header \n [**Ricardo Furtado** Github](https://github.com/rickfurt) \n\n > This is a Blockquote \n\n blockquote \n\n \nParagraphs are Here  \n and Here.\n\n Need 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**.\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears \n\n **We can input images** \n\n ![foo](https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 "title")'
      }
      this.handleChange = this.handleChange.bind(this)
    }
      
      handleChange(e){            
        this.setState({
          input:e.target.value,
        })
      }

      updateMark = function (markdown){
        this.setState({markdown})
      };
    
    render(){

      let {markdown} = this.state;
      console.log(markdown);

      return (
        <div>
          <div className="container main-container">
            <div className="editor-container">
              <div className="editor-header bg-secondary text-white text-center">Markdown Previewer Editor</div>
                <textarea className="form-control form-control-lg" id="editor" type="text" value={markdown} placeholder={markdown} onChange={(event)=> this.updateMark(event.target.value)}  />
            </div>
            <div id="preview-container">
              <div className="preview-header bg-secondary text-white text-center">Viewer</div>
              <div className="viewer-content text-center" id="preview" dangerouslySetInnerHTML = {{__html:marked(markdown)}}>
            </div>  
          </div>
          </div>
        </div>
      )
    }
  }  