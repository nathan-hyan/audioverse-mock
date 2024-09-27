import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Fifth from './Fifth';

describe('Fifth component', () => {
  it('should render the heading', () => {
    render(<Fifth />);
    expect(
      screen.getByText(
        '¡Incluye tu equipo de sonido AudioVerse con opción de actualización!'
      )
    ).toBeInTheDocument();
  });

  it('should render the paragraph with AudioVerse description', () => {
    render(<Fifth />);
    expect(
      screen.getByText(
        /Con AudioVerse, no solo adquieres altavoces o DACs de alta calidad, también tienes la opción de actualizarlos cada tres años/i
      )
    ).toBeInTheDocument();
  });

  it('should render the Button with label "Conocer más"', () => {
    render(<Fifth />);
    expect(
      screen.getByRole('button', { name: 'Conocer más' })
    ).toBeInTheDocument();
  });

  it('should render the UnderAudioBadge component', () => {
    render(<Fifth />);
    expect(screen.getByTestId('UnderAudioBadge')).toBeInTheDocument();
  });
});
