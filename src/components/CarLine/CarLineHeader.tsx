import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { CarLineButtonsText } from './enum';
import { StyledButton } from '../UI/Button/MyButton';
import InputText from '../UI/Inputs/InputText';
import InputColor from '../UI/Inputs/InputColor';
import { StyledForm } from '../Garage/style';
import GarageTextContent from '../Garage/enum';

interface CarLineHeaderProps {
  name: string;
  color: string;
  id: number;
  remove: (id: number) => Promise<void>;
  updateCar: () => void;
  changeName: (newName: string) => void;
  changeColor: (newColor: string) => void;
}

const StyledCarLineHeader = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 1rem;
`;
const StyledCarName = styled.div`
  font-size: 24px;
  color: #fff;
  margin-right: 1rem;
`;
const CarLineHeaderButton = styled(StyledButton)`
  margin-right: 1rem;
  font-size: 18px;
`;
const StyledUpdateForm = styled(StyledForm)`
  margin: 0;
  align-items: center;
  max-height: 44px;
`;

const CarLineHeader: FC<CarLineHeaderProps> = ({
  name,
  color,
  id,
  remove,
  updateCar,
  changeName,
  changeColor,
}) => {
  const [select, setSelect] = useState<boolean>(false);
  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    changeColor(value);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.trim().length) {
      changeName(value);
      return value;
    }
    changeName(name);
    return name;
  };
  return (
    <StyledCarLineHeader>
      <CarLineHeaderButton onClick={() => setSelect(true)}>
        {CarLineButtonsText.SELECT}
      </CarLineHeaderButton>
      <CarLineHeaderButton onClick={() => remove(id)}>
        {CarLineButtonsText.REMOVE}
      </CarLineHeaderButton>
      <StyledCarName>{name}</StyledCarName>
      {select && (
        <StyledUpdateForm>
          <InputText name={name} onChange={handleChangeName} />
          <InputColor onChange={handleChangeColor} color={color} />
          <CarLineHeaderButton
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              updateCar();
              setSelect(false);
            }}
          >
            {GarageTextContent.CHANGE_BUTTON}
          </CarLineHeaderButton>
        </StyledUpdateForm>
      )}
    </StyledCarLineHeader>
  );
};

export default CarLineHeader;
