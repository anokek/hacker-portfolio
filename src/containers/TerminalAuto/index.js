import React, { Component } from 'react';
import './index.css';
import codeTwo from '../../codesnippets/code_two.js';

class Terminal extends Component {
  componentDidMount() {
    let i = 0;
    setInterval(() => {
      this.terminalAuto.value += codeTwo.slice(i, i + 5);
      i += 5;
      if (i > codeTwo.length) {
        i = 0;
      }
      this.terminalAuto.scrollTop = this.terminalAuto.scrollHeight;
    }, 1);
  }

  render() {
    return (
      <textarea
        className="terminal-auto"
        placeholder={'Start typing...'}
        ref={ref => {
          this.terminalAuto = ref;
        }}
        readOnly
        onMouseDown={e => {
          e.preventDefault();
          if (this.props.dndPermission) {
            this.props.simpleDragAndDrop(this.terminalAuto, e);
          }
        }}
      />
    );
  }
}

export default Terminal;
