import styled from 'styled-components';

const StyleTopSectionForm = styled.form`
  position: relative;
  display: flex;
  height: 64px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryMain};
  border: 3px ${(props) => props.theme.colors.secondaryMain} solid;
  border-radius: 8px;
  margin-top: 145px;
  margin-bottom: 120px;
  @media screen and (max-width: 1024px) {
    margin-top: 64px;
    margin-bottom: 64px;
    height: fit-content;
    display: grid;
    border: 4px ${(props) => props.theme.colors.secondaryAccent} solid;
    background-color: ${(props) => props.theme.colors.secondaryAccent};
    & button {
      border: 4px ${(props) => props.theme.colors.secondaryAccent} solid;
      margin: 0;
      padding: 0;
    }

    & button:hover {
      box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.secondaryAccent} inset,
      0 0 10px 4px ${(props) => props.theme.colors.secondaryAccent};
    }
  }
  @media screen and (max-width: 768px) {
    border: 3px ${(props) => props.theme.colors.secondaryAccent} solid;
    & button {
      border: 3px ${(props) => props.theme.colors.secondaryAccent} solid;
    }
  }
  @media screen and (max-width: 480px) {
    border: 2px ${(props) => props.theme.colors.secondaryAccent} solid;
    & button {
      border: 2px ${(props) => props.theme.colors.secondaryAccent} solid;
      height: 45px;
      font-size: 18px;
      line-height: 22px;
    }
  }

  & input {
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
    border: 0;
    background-color: ${(props) => props.theme.colors.primaryMain};
    @media screen and (max-width: 1024px) {
      border: 4px ${(props) => props.theme.colors.secondaryAccent} solid;
      border-radius: 8px;
    }
    @media screen and (max-width: 768px) {
      border: 3px ${(props) => props.theme.colors.secondaryAccent} solid;
    }
    @media screen and (max-width: 480px) {
      border: 2px ${(props) => props.theme.colors.secondaryAccent} solid;
      font-size: 15px;
      line-height: 18px;
    }
  }
}


& * {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

}
`;

export default StyleTopSectionForm;
