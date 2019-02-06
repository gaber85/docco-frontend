/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const MainButton = props => {
  const { text, click, align, width } = props;
  return (
    <div
      css={css`
        background-color: #f1c40f;
        font-size: 18px;
        min-width: ${width};
        max-width: 200px;
        text-align: center;
        padding: 10px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 1);
        border-radius: 15px;
        cursor: pointer;
        outline: none;
        align-self: ${align};
        &:hover {
          background-color: #f6de62;
        }
        &:active {
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 1);
          background-color: #f1c40f;
        }
      `}
      role="button"
      tabIndex="0"
      className="main-button"
      onClick={click}
      onKeyPress={click}
    >
      {text}
    </div>
  );
};

export default MainButton;
