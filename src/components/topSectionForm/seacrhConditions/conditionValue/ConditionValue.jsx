import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleConditionValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
`;
const ValueOfCondition = styled.div`
  padding-right: 5px;
  color: ${(props) => props.theme.colors.primaryText};
`;
const ConditionTitle = styled.p`
  color: ${(props) => props.theme.colors.primaryText};`;

function ConditionValue(props) {
  return (
    <StyleConditionValue>
      <ValueOfCondition>{props.conditionValue}</ValueOfCondition>
      <ConditionTitle>{props.conditionTitle}</ConditionTitle>
    </StyleConditionValue>
  );
}

ConditionValue.propTypes = {
  conditionValue: PropTypes.number.isRequired,
  conditionTitle: PropTypes.string.isRequired,
};
export default ConditionValue;
