import styled from 'styled-components';

export const StyleDropDownList = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  padding-top: 10px;
`;
export const DropDownListTitle = styled.p`
  color: ${(props) => props.theme.colors.primaryText};`;
export const DropDownListOfSelects = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
`;
export const DropDownSelect = styled.select`
  border-color: ${(props) => props.theme.colors.primaryAccent};
  color: ${(props) => props.theme.colors.primaryText};
  background-color: ${(props) => props.theme.colors.primaryMain};
  margin-bottom: 2px;
  min-height: 35px;
  border-radius: 8px;

  & option {
    color: ${(props) => props.theme.colors.primaryText};
  }
`;
export const DropDownOption = styled.option``;
