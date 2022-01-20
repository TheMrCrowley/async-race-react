import React, { FC } from 'react';
import * as Styled from './style';
import GarageTextContent from './enum';
import InputText from '../UI/Inputs/InputText';
import InputColor from '../UI/Inputs/InputColor';

const GarageHeader: FC = () => {
  return (
    <Styled.StyledGarageHeader>
      <Styled.StyledTitleWrapper>
        <Styled.StyledGarageTitle>
          {GarageTextContent.GARAGE_TITLE}(4)
        </Styled.StyledGarageTitle>
        <Styled.StyledGaragePage>
          {GarageTextContent.PAGE_TITLE}(4)
        </Styled.StyledGaragePage>
      </Styled.StyledTitleWrapper>
      <Styled.StyledControlsWrapper>
        <Styled.StyledFormWrapper>
          <Styled.StyledForm>
            <InputText />
            <InputColor />
            <Styled.StyledFormButton onClick={() => console.log(1)}>
              {GarageTextContent.CREATE_BUTTON}
            </Styled.StyledFormButton>
          </Styled.StyledForm>
        </Styled.StyledFormWrapper>
        <Styled.StyledRaceButtonsWrapper>
          <Styled.StyledControlButton onClick={() => console.log(1)}>
            {GarageTextContent.RACE_BUTTON}
          </Styled.StyledControlButton>
          <Styled.StyledControlButton onClick={() => console.log(1)}>
            {GarageTextContent.RESET_BUTTON}
          </Styled.StyledControlButton>
          <Styled.StyledControlButton onClick={() => console.log(1)}>
            {GarageTextContent.GENERATE_BUTTON}
          </Styled.StyledControlButton>
        </Styled.StyledRaceButtonsWrapper>
      </Styled.StyledControlsWrapper>
      <Styled.StyledPageButtonsWrapper>
        <Styled.StyledControlButton onClick={() => console.log(1)}>
          {GarageTextContent.PAGE_PREV}
        </Styled.StyledControlButton>
        <Styled.StyledControlButton onClick={() => console.log(1)}>
          {GarageTextContent.PAGE_NEXT}
        </Styled.StyledControlButton>
      </Styled.StyledPageButtonsWrapper>
    </Styled.StyledGarageHeader>
  );
};

export default GarageHeader;
