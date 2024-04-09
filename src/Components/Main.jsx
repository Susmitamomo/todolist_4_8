import React, { useReducer, useState } from 'react';

const initialState = [
    {
      id: 1,
      title: 'Buy groceries',
      completed: false
    },
    {
      id: 2,
      title: 'Finish homework',
      completed: true
    },
    {
      id: 3,
      title: 'Go for a run',
      completed: false
    }
  ];
  

// Reducer function to manage state
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    default:
      return state;
  }
};
