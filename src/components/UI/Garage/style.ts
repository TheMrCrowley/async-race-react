import styled from 'styled-components';
import { StyledButton } from '../Button/MyButton';

export const StyledGarageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const StyledGarageHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 5%;
  row-gap: 1rem;
  width: 100%;
`;

export const StyledTitleWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const StyledGarageTitle = styled.h2`
  font-size: 48px;
  margin: 0;
  padding: 0;
  color: #fff;
`;

export const StyledGaragePage = styled.span`
  font-size: 32px;
  color: #fecb00;
`;

export const StyledControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledInputText = styled.input`
  max-width: 50%;
  width: 100%;
  margin-right: 2rem;
  font-size: 24px;
`;

export const StyledInputColor = styled.input`
  min-width: 2rem;
  margin-right: 2rem;
`;

export const StyledFormButton = styled(StyledButton)`
  min-width: 10rem;
  border: 2px solid #fecb00;
  padding: 0.5rem 1rem;
`;

export const StyledRaceButtonsWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

export const StyledPageButtonsWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledControlButton = styled(StyledButton)`
  min-width: 8rem;
  margin-right: 2rem;
`;

export const CarLinesWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 1rem;
`;
