// ToDoItem.test.js

import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import ToDoItem from '../components/ToDoItem';

describe('ToDoItem', () => {
  it('renders task text', () => {
    const taskText = 'Write a blog post';
    render(<ToDoItem text={taskText} completed={false} />);

    const { getByText } = screen;

    expect(getByText(taskText)).toBeInTheDocument();
  });

  it('applies line-through decoration for completed tasks', () => {
    const taskText = 'Take a walk';

    render(<ToDoItem text={taskText} completed={true} />);

    const { getByText } = screen;

    expect(getByText(taskText)).toBeInTheDocument();
    expect(getByText(taskText)).toHaveClass('completed');
    expect(getByText(taskText)).toHaveStyle('text-decoration: line-through');
  });

  it('changes cursor to pointer on hover', () => {
    const taskText = 'Buy groceries';
    render(<ToDoItem text={taskText} completed={false} />);

    const { getByText } = screen;

    fireEvent.mouseEnter(getByText(taskText));

    expect(getByText(taskText)).toHaveStyle('cursor: pointer');
  });

  it('calls onToggleCompleted prop on click', () => {
    const mockOnToggleCompleted = jest.fn();
    const taskText = 'Learn React';

    render(<ToDoItem text={taskText} completed={false} onToggleCompleted={mockOnToggleCompleted} />);

    const { getByText } = screen;

    fireEvent.click(getByText(taskText));

    expect(mockOnToggleCompleted).toHaveBeenCalledTimes(1);
    expect(mockOnToggleCompleted).toHaveBeenCalledWith(taskText);
  });
});
