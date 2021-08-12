import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoFilter from '../todoFilter';

const allFn = jest.fn();
const pendingFn = jest.fn();
const completedFn = jest.fn();

describe('test Todo Filter Component', () => {
  test('should take snapshot', () => {
    const { container } = render(<TodoFilter filterTodo={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render component without error', () => {
    const { container } = render(<TodoFilter filterTodo={() => {}} />);
    expect(container.hasChildNodes).toBeTruthy();
  });

  test('should have wrapper div', () => {
    const { queryByTestId } = render(<TodoFilter filterTodo={() => {}} />);
    const wrapperDiv = queryByTestId('filter-wrapper');
    expect(wrapperDiv).toHaveClass('filter-wrapper');
  });

  test('should have 3 buttons', () => {
    const { queryAllByRole } = render(<TodoFilter filterTodo={() => {}} />);
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(3);
    expect(buttons[0].innerHTML).toBe('All');
    expect(buttons[1].innerHTML).toBe('Pending');
    expect(buttons[2].innerHTML).toBe('Completed');
  });

  test('should call all button', () => {
    const { queryByText } = render(<TodoFilter filterTodo={allFn} />);
    const allButton = queryByText('All');
    fireEvent.click(allButton);
    expect(allFn).toHaveBeenCalledTimes(1);
    expect(allFn).toHaveBeenCalledWith('all');
  });

  test('should call pending button', () => {
    const { queryByText } = render(<TodoFilter filterTodo={pendingFn} />);
    const pendingButton = queryByText('Pending');
    fireEvent.click(pendingButton);
    expect(pendingFn).toHaveBeenCalledTimes(1);
    expect(pendingFn).toHaveBeenCalledWith('pending');
  });

  test('should call completed button', () => {
    const { queryByText } = render(<TodoFilter filterTodo={completedFn} />);
    const completedButton = queryByText('Completed');
    fireEvent.click(completedButton);
    expect(completedFn).toHaveBeenCalledTimes(1);
    expect(completedFn).toHaveBeenCalledWith('completed');
  });
});
