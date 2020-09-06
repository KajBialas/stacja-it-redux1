import React, { useState} from 'react';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../index';

function TodoForm({addTodo}) {
  const [formValue, setFormValue] = useState('');

  const handleFormChange = (e) => setFormValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formValue);
    setFormValue('');
  };

  return (
    <div>
      <h2>Dodaj todos</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFormChange} value={formValue} />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (value) => dispatch({type: ACTION_TYPES.TODO_ADD, payload: value}),
  }
};

export default connect(null, mapDispatchToProps)(TodoForm);