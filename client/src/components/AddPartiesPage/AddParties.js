import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import MainButton from '../MainButton';

const AddParties = props => {

  const { document, handleInputChange, handleCreateNegotiation, handleProgress } = props;
  const { partyBEmail } = document;

  const handleClick = () => handleCreateNegotiation();
  const handleClickBack = () => handleProgress(1);

  return (
    <AddPartiesContainer>
      <Title>Add Party to Negotiation</Title>
      <form 
      css={css`
          display: flex;
          max-width: 30%;
          flex-direction: column;
          width: 75vw;
          flex: 1;
        `}>
        <Input
          type="email"
          name="partyBEmail"
          value={partyBEmail}
          onChange={handleInputChange}
          placeholder="email..."
        />
      </form>
      <BackAndNextButtons>
        <MainButton text="Back" align="flex-start" margin="10px" width="175px" click={handleClickBack} />
        <MainButton text="Create negotiation" margin="10px" width="175px" click={handleClick} />
      </BackAndNextButtons>
    </AddPartiesContainer>
  );
};

const AddPartiesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled('div')`
font-size: 6vw;
text-align: center;
margin-bottom: 40px;
`;
const BackAndNextButtons = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
  padding-right: 0;
  padding-left: 0;
`;
const Input = styled('input')`
  margin-bottom: 10px;
  width: 75vw;
  padding-left: 5px;
  height: 35px;
  font-size: 18px;
  border: none;
  outline: none;
  width: 100%;
`;

export default AddParties;
