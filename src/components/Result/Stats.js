import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';

import { calculateScore, calculateGrade } from '../../utils';

const Stats = ({
  totalQuestions,
  correctAnswers,
  replayQuiz,
  resetQuiz
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const {grade} = calculateGrade(score);

    if(score >= 75){
        var color = 'green'
    }
    else if(score >= 50){
        var color = 'yellow'
    }
    else {
        var color = 'red'
    }

    return (
        <Segment>
            <Header as="h1" color={color} textAlign="center" block>
                {grade}
            </Header>
            <Header as="h3" textAlign="center" block>
              Rätta svar: {correctAnswers}
            </Header>
            <Header as="h3" textAlign="center" block>
              ditt resultat: {score}%
            </Header>
            <Header as="h3" textAlign="center" block>
              Minsta antal rätt för godkänd: 50%
            </Header>

      <div style={{ marginTop: 35 }}>
        <Button
            secondary
          content="Spela igen"
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          color="teal"
          content="Tillbaka till startsida"
          onClick={resetQuiz}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        />
      </div>
    </Segment>

  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired
};


export default Stats;
