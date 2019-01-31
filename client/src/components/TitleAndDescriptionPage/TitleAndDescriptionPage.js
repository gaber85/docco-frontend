import React from 'react';
import './TitleAndDescrpiptionPage.css';
import MainButton from '../MainButton';

const TitleAndDescriptionPage = props => {
  const {
    document: {
      title,
      description
    },
    handleInputChange,
  } = props;
  // const { title, description } = document;
  const handleClick = () => console.log('click');

  return (
    <div className="box">
      <h1>Create Negotiation</h1>
      <div className="form">
        <form>
          <input
            className="title-input"
            data-testid="title-input"
            type="text"
            name="title"
            placeholder="title..."
            value={title}
            onChange={handleInputChange}
          />
          <textarea
            className="description-input"
            rows="5"
            cols="33"
            data-testid="description-input"
            name="description"
            value={description}
            placeholder="description..."
            onChange={handleInputChange}
          />
          <MainButton text="next" click={handleClick} />
        </form>
      </div>
    </div>
  );
};
export default TitleAndDescriptionPage;
