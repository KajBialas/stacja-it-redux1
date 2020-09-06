import React, { useState} from 'react';
import { connect } from 'react-redux';
import { TODO_ACTION_TYPES } from '../modules/todo/todo.action';

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
    addTodo: (value) => dispatch({type: TODO_ACTION_TYPES.ADD, payload: value}),
  }
};

export default connect(null, mapDispatchToProps)(TodoForm);