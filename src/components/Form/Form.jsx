//модули
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

//компоненты
import Input from '../Input';

//стили
import styles from './Form.module.css';

const INITIAL_STATE = {
  name: '',
};

class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

  inputHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name } = this.state;
    return (
      <form className={styles.Form} onSubmit={this.formSubmit}>
        <h2 className="Title">Phonebook</h2>
        <Input
          inputLabel="Name"
          type="text"
          value={name}
          onInputChange={this.inputHandler}
        />
        <button type="submit" className={styles.FormButton}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
