import React, { Component } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
class Editor extends Component {
  state = {};
  render() {
    return (
      <div>
        <AceEditor
          mode="html"
          theme="github"
          width="100%"
          onChange={this.props.onChange}
          name="UNIQUE_ID_OF_DIV"
          fontSize="20px"
          value={this.state.code}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            showLineNumbers: true,
          }}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}

export default Editor;
