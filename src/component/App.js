import { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics ";
import Notification from "./Notification/Notification";
import styled from "styled-components";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedbackGood = () => {
    setGood((state) => state + 1);
  };
  const addFeedbackNeutral = () => {
    setNeutral((state) => state + 1);
  };
  const addFeedbackBad = () => {
    setBad((state) => state + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback()
      ? Math.floor((good * 100) / countTotalFeedback())
      : 0;

  return (
    <Wrapper>
      <Section title="Please leave feedback" />

      <FeedbackOptions
        options={Object.keys(useState)}
        onLeaveFeedbackGood={addFeedbackGood}
        onLeaveFeedbackNeutral={addFeedbackNeutral}
        onLeaveFeedbackBad={addFeedbackBad}
      />

      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: block;
  margin-left: 15px;
`;

export default App;
