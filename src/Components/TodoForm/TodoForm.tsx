import * as React from 'react';
import TodoItem from '../../Models/TodoItem';

interface TodoFormProps {
    change: (propertyName: string) => (event: React.FormEvent<HTMLInputElement>) => void;
    submit: (event: React.FormEvent<HTMLButtonElement>) => Promise<void>;
    item: TodoItem; 
}

const TodoForm: React.SFC<TodoFormProps> = ({change, submit, item}: TodoFormProps) => {
  let {name, description, isComplete} = item;
  return (      
  <div>
    <br />
    <label>Name: </label>
    <input type="text" onChange={change('name')} value={name} />
    <label>Description: </label>
    <input type="text" onChange={change('description')} value={description} />
    <label>is it completed?: </label>
    <input type="checkbox" onChange={change('isComplete')} checked={isComplete} />
    <button onClick={submit} >post todo</button>
  </div>
  );
};

export default TodoForm;