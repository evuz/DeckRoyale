import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: lightblue;
  color: white;
  flex-grow: 1;
`;

const Input = styled.input`
  padding-right: 6px;
  flex-basis: 80%;
`;

export class NewField extends Component {
  static propTypes = {
    newButtonText: PropTypes.string,
    newField: PropTypes.func,
  };

  static defaultProps = {
    newButtonText: 'New Field',
    newField: () => {},
  };

  constructor() {
    super();
    this.input = React.createRef();
  }

  state = { edit: false };

  onSubmit = e => {
    e.preventDefault();
    this.props.newField(this.input.current.value);
    this.handleEdit(false);
  };

  handleEdit = state => {
    this.setState({ edit: state });
  };

  render() {
    const { edit } = this.state;
    const { newButtonText } = this.props;
    return edit ? (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <Container>
            <Input type="text" innerRef={this.input} />
            <Button type="button" onClick={() => this.handleEdit(false)}>
              Remove
            </Button>
          </Container>
          <Container>
            <Button type="submit">Accept</Button>
          </Container>
        </form>
      </Fragment>
    ) : (
      <Container>
        <Button onClick={() => this.handleEdit(true)}>{newButtonText}</Button>
      </Container>
    );
  }
}
