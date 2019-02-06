import woofmark from 'woofmark';
import megamark from 'megamark';
import domador from 'domador';
import React, { Component } from 'react';
import './EditorView.css';

class ContractSection extends Component {

  textareaRef = React.createRef();

  componentDidMount() {
    const textarea = this.textareaRef.current;

    const commandButtonsStyle = {
      bold: { hidden: true }, // { innerHTML: '<i class="fas fa-bold"/>', className: 'btn-link' },
      italic: { hidden: true }, // { innerHTML: '<i class="fas fa-italic"/>', className: 'btn-link' },
      quote: { hidden: true }, // { innerHTML: '<i class="fas fa-quote-right"/>', className: 'btn-link' },
      code: { hidden: true }, // { innerHTML: '<i class="fas fa-code"/>', className: 'btn-link' },
      ol: { hidden: true }, // { innerHTML: '<i class="fas fa-list-ol"/>', className: 'btn-link' },
      ul: { hidden: true }, // { innerHTML: '<i class="fas fa-list-ul"/>', className: 'btn-link' },
      heading: { hidden: true }, // { innerHTML: '<i class="fas fa-heading"/>', className: 'btn-link' },
      link: { hidden: true }, // { innerHTML: '<i class="fas fa-link"/>', className: 'btn-link' },
      image: { hidden: true }, // { innerHTML: '<i class="fas fa-image"/>', className: 'btn-link' },
      attachment: { hidden: true }//  { innerHTML: '<i class="fas fa-paperclip"/>', className: 'btn-link' }
    };

    const modeButtonsStyle = {
      markdown: { hidden: true },
      html: { hidden: true },
      wysiwyg: { hidden: true },
    };

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
    // eslint-disable-next-line
    woofmark.find(this.textareaRef.current).value(this.props.content);
  }

  render() {
    const { content } = this.props || 'No Content';
    return (
      <div className="contract-container">
        <div className="content-body">
          <textarea className="main-textarea" ref={ this.textareaRef }>{ content }</textarea>
        </div>
      </div>
    );
  }
}

export default ContractSection;
