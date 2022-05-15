import styled from 'styled-components';

export const StyleConditionFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  @media screen and (min-width: 1025px) {
    &:not(:first-child) {
      margin-top: 12px;
    }
  }
  @media screen and (max-width: 1024px) {
    height: 100%;
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (max-width: 480px) {
    height: 100%;
    font-size: 15px;
    line-height: 18px;
  }

`;
export const StyleConditionFilterName = styled.p`
  color: ${(props) => props.theme.colors.primaryText};
`;
export const FilterValue = styled.div`
  min-width: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;

  .condition_button {
    height: 30px;
    width: 30px;
    border: 1px solid ${(props) => props.theme.colors.primaryAccent};
    background-color: ${(props) => props.theme.colors.primaryMain};
    color: ${(props) => props.theme.colors.primaryAccent};
    font-size: 18px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .limit_value {
    color: ${(props) => props.theme.colors.secondaryText};
    border-color: ${(props) => props.theme.colors.secondaryText};
  }

  .valid_value:hover {
    box-shadow: 0 0 0 0 ${(props) => props.theme.colors.primaryAccent} inset, 0 0 20px 1px ${(props) => props.theme.colors.primaryAccent};
  }
`;
export const ConditionButton = styled.div``;
export const NumOfFilterValue = styled.p`
  color: ${(props) => props.theme.colors.primaryText};`;
