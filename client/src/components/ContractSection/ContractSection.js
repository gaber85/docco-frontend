import React, { Component } from 'react';
import './ContractSection.css';

const woofmark = require('woofmark');
const megamark = require('megamark');
const domador = require('domador');

class ContractSection extends Component {

  textareaRef = React.createRef();

  componentDidMount() {
    const textarea = this.textareaRef.current;
    const commandButtonsStyle = {
      bold: { innerHTML: '<i class="fas fa-bold"/>', className: 'btn-link' },
      italic: { innerHTML: '<i class="fas fa-italic"/>', className: 'btn-link' },
      quote: { innerHTML: '<i class="fas fa-quote-right"/>', className: 'btn-link' },
      code: { innerHTML: '<i class="fas fa-code"/>', className: 'btn-link' },
      ol: { innerHTML: '<i class="fas fa-list-ol"/>', className: 'btn-link' },
      ul: { innerHTML: '<i class="fas fa-list-ul"/>', className: 'btn-link' },
      heading: { innerHTML: '<i class="fas fa-heading"/>', className: 'btn-link' },
      link: { innerHTML: '<i class="fas fa-link"/>', className: 'btn-link' },
      image: { innerHTML: '<i class="fas fa-image"/>', className: 'btn-link' },
      attachment: { innerHTML: '<i class="fas fa-paperclip"/>', className: 'btn-link' }
    };
    const modeButtonsStyle = {
      markdown: { hidden: true },
      html: { hidden: true },
      wysiwyg: { hidden: true } // { innerHTML: '<i class="fas fa-edit"/>', className: 'btn-link-modes' }
    }
    woofmark(textarea, {
      parseMarkdown: megamark,
      parseHTML: domador,
      render: {
        modes: (button, id) => {
          if (modeButtonsStyle[id].innerHTML) button.innerHTML = modeButtonsStyle[id].innerHTML; //  eslint-disable-line
          if (modeButtonsStyle[id].hidden) button.style.display = 'none'; //  eslint-disable-line
          if (modeButtonsStyle[id].className) button.classList.add(modeButtonsStyle[id].className);
        },
        commands: (button, id) => {
          if (commandButtonsStyle[id].innerHTML) button.innerHTML = commandButtonsStyle[id].innerHTML; //  eslint-disable-line
          if (commandButtonsStyle[id].hidden) button.style.display = 'none'; //  eslint-disable-line
          if (commandButtonsStyle[id].className) button.classList.add(commandButtonsStyle[id].className);
        }
      }
    });
  }

  componentDidUpdate() {
    woofmark.find(this.textareaRef.current).value(this.props.info.tContent.content);
  }

  render() {
    const { info } = this.props;
    console.log('these are the props in the contract section', this.props);
    const { yContent, tContent, contract } = info;
    let content = 'No Content'
    // the if logic is necessary because at (the dev stage I don't always pass a contract); can be removed in final
    if (info && tContent){
    // const {content:content1} = yContent;
    const content1 = 'thisjttjtfhtfjhtj';
    const {content:content2} = tContent;
      // if (contract.youEditedLast) { content = content1}
      // else { content = content2 };
      content = content2;
    }
    console.log('this os the content', content)
    return (
      <div className="contract-container">
        <div className="content-body">
          <textarea className="main-textarea" ref={this.textareaRef}>{content}</textarea>
        </div>
      </div>
    );
  }
}

export default ContractSection;
