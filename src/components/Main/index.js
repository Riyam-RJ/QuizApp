import React, { useState } from 'react';
import {Container, Segment, Item, Dropdown, Divider, Button, Message,} from 'semantic-ui-react';
import {CATEGORIES} from '../../constants';
import { shuffle } from '../../utils';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState('21');
  const [numOfQuestions] = useState(10);
  const [questionsType] = useState('boolean');

  let allFieldsSelected = false;
  if (category) {
    allFieldsSelected = true;
  }

  const fetchData = () => {

    const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&type=${questionsType}`;

    fetch(API)
      .then(respone => respone.json())
      .then(data =>
        setTimeout(() => {
          const {results } = data;

          results.forEach(element => {
            element.options = shuffle([
              element.correct_answer,
              ...element.incorrect_answers,
            ]);
          });

          startQuiz(
            results
          );
        }, 1000)
      )
  };

  return (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Content>
              <Item.Header>
                <h1>Quiz Appen</h1>
              </Item.Header>
              <Divider />
              <Item.Meta>
                <Dropdown
                  fluid
                  selection
                  name="Katogeri"
                  placeholder="Välj katogeri"
                  header="Välj katogeri"
                  options={CATEGORIES}
                  value={category}
                  onChange={(e, { value }) => setCategory(value)}
                />
                <br />

              </Item.Meta>
              <Divider />
              <Item.Extra>
                <Button
                    secondary
                    size="big"
                    icon="play"
                    labelPosition="left"
                    content='Spela nu'
                    onClick={fetchData}
                    disabled={!allFieldsSelected}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
};

export default Main;
