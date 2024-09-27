import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { ITEMS } from './constants';

describe('Landing component', () => {
  it('should render the main title', () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /Audio profesional al alcance de tus oídos. Con todo lo que necesitas/i
      )
    ).toBeInTheDocument();
  });

  it('should render the UnderAudioBadge component', () => {
    render(<Hero />);
    expect(screen.getByTestId('UnderAudioBadge')).toBeInTheDocument();
  });

  it('should render the button with the label', () => {
    render(<Hero />);
    expect(screen.getByText('Comienza desde 3,99€ al mes')).toBeInTheDocument();
  });

  it('should render the subscription small text', () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /Prueba AudioVerse sin ataduras durante 30 días. Si decides cancelar/i
      )
    ).toBeInTheDocument();
  });

  it('should render all the items from ITEMS', () => {
    render(<Hero />);
    ITEMS.forEach(({ description }) => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });
});
