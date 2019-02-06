import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import MainButton from '../MainButton';

const TitleAndDescriptionPage = props => {
  const { document, handleInputChange, handleProgress } = props;
  const { title, description } = document;
  const handleClick = () => handleProgress(1);
  const handleClickBack = () => handleProgress(0);

  return (
    <TitleDescriptionContainer>
      <div
        css={css`
          font-size: 9vw;
          color: #2c3e50;
          padding-bottom: 10%;
          justify-self: flex-start;
        `}
      >
        Create Negotiation
      </div>
      <form
        css={css`
          display: flex;
          width: 60%;
          max-width: 400px;
          flex-direction: column;
          flex: 1;
        `}
      >
        <Input
          autoComplete="off"
          type="text"
          name="email"
          placeholder="email..."
          required
        />
        <Input
          data-testid="title-input"
          type="text"
          name="title"
          placeholder="title..."
          value={title}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          data-testid="description-input"
          name="description"
          value={description}
          placeholder="description..."
          onChange={handleInputChange}
        />
        <MainButton text="Next" align='flex-end' click={handleClick} />
      </form>
    </TitleDescriptionContainer>
  );
};

const TitleDescriptionContainer = styled('div')`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Input = styled('input')`
  margin-bottom: 10px;
  height: 35px;
  width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
`;

export default TitleAndDescriptionPage;
