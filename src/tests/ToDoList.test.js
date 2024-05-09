import React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';
import ToDoList from '../components/ToDoList';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('ToDoList Component', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it('renders the component properly', () => {
    const { getByText, getByPlaceholderText } = render(<ToDoList />);

    expect(getByText('Add Task')).toBeInTheDocument();
    expect(getByPlaceholderText('Add a new task')).toBeInTheDocument();
  });

  it('adds a new todo item', () => {
    const { getByText, getByPlaceholderText } = render(<ToDoList />);

    fireEvent.change(getByPlaceholderText('Add a new task'), { target: { value: 'New Task' } });
    fireEvent.click(getByText('Add Task'));

    expect(getByText('New Task')).toBeInTheDocument();
  });

  it('toggles todo item completion', () => {
    const { getByText, getByTestId } = render(<ToDoList />);

    fireEvent.change(getByTestId('todo-input'), { target: { value: 'Cooking' } });
    fireEvent.click(getByText('Add Task'));

    fireEvent.click(getByText('Cooking'));
    expect(getByText('Cooking')).toHaveClass('todo-item completed');
  });

  it('removes completed todo items', () => {
    const { getByText, getByTestId, getAllByTestId } = render(<ToDoList />);

    fireEvent.change(getByTestId('todo-input'), { target: { value: 'LeetCode' } });
    fireEvent.click(getByText('Add Task'));

    fireEvent.click(getByText('LeetCode'));
    fireEvent.click(getByText('Remove Completed'));
    
    const todoItemCheckboxes = getAllByTestId('todo-item-checkbox');
    todoItemCheckboxes.forEach((checkbox) => {
    expect(checkbox).toHaveClass('todo-item');});
  });

  it('empties the todo list', () => {
    const { getByText, getByTestId } = render(<ToDoList />);

    fireEvent.change(getByTestId('todo-input'), { target: { value: 'Complete notes' } });
    fireEvent.click(getByText('Add Task'));

    fireEvent.click(getByText('Empty'));

    expect(getByText('Nothing to do buddy. Sleep!😴')).toBeInTheDocument();
  });
});
