import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Todo from '../index';
import axiosInstance from '@utils/axiosInstance';

const mock = new MockAdapter(axiosInstance);

describe('Test todo application', () => {
  test('should check component render without error', () => {
    const { container } = render(<Todo />);
    expect(container.firstChild).toBeTruthy();
  });

  test('should render data on component load', async () => {
    mock.onGet('/todoList').reply(200, [
      {
        id: 1,
        text: 'Get Milk',
        isDone: true,
      },
    ]);

    const { container } = render(<Todo />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
