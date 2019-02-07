import { Link } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import './ContractList.css';
// import {css,jsx} from '@emotion/core';

export const ContractList = props => {
  const { contractList } = props;

  // renders each contract with font awesome symbol;
  const view = contractList.map(contract => {
    return (
      <div key={contract.id} alt={contract.title} className="my-contract">
        <Link
          css={css`
            text-decoration: none;
            color: #2c3e50;
            pointer: cursor;
          `}
          className="specificContract"
          to={`/contract/${contract.id}`}
        >
          <i
            css={css`
              font-size: 10vh;
            `}
            className="far fa-file"
          />
          <ContractTitle>{contract.title}</ContractTitle>
        </Link>
      </div>
    );
  });

  return <ContractListContainer>{view}</ContractListContainer>;
};

const ContractListContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
const ContractTitle = styled('div')`
  text-align: center;
  padding-top: 5px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default ContractList;
