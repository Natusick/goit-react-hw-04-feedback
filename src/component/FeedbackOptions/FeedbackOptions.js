import PropsType from "prop-types";
import styled from "styled-components";

const FeedbackOptions = ({ onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad  }) => {
  return (
    <Wrapper>
      <Button onClick={() => onLeaveFeedbackGood("good")}>Good</Button>
      <Button onClick={() => onLeaveFeedbackNeutral("neutral")}>Neutral</Button>
      <Button onClick={() => onLeaveFeedbackBad("bad")}>Bad</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
`;

const Button = styled.button`
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 15px 2px 15px;
  margin: 0px 15px 10px 0px;
  background-color: white;
  border: 2px solid rgba(97, 95, 95, 0.3);
  border-radius: 5px;
  &:hover,
  &:focus {
    border: 4px solid transparent;
    background-color: rgb(217, 234, 237);
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.18),
      2px 2px 2px 0px rgba(0, 0, 0, 0.18), 2px 2px 2px 0px rgba(0, 0, 0, 0.18),
      2px 2px 2px 0px rgba(0, 0, 0, 0.18);
  }
`;

FeedbackOptions.propTypes = {
  onLeaveFeedbackGood: PropsType.func.isRequired,
  onLeaveFeedbackNeutral: PropsType.func.isRequired,
  onLeaveFeedbackBad: PropsType.func.isRequired,
};

export default FeedbackOptions;
