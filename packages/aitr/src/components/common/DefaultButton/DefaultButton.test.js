/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import DefaultButton from './DefaultButton';

describe('when rendered verify button', () => {
  test('should verify button click when render', () => {
    render(<DefaultButton />);
    const button = screen.getByTestId('button-test');

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(button).toBeInTheDocument();
  });

  test('should verify received props', () => {
    render(<DefaultButton text="Confirm" />);

    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });
});
