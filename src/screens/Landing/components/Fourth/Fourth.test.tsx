import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Fourth from './Fourth';

describe('Fourth component', () => {
  it('should render the first heading', () => {
    render(<Fourth />);
    expect(screen.getByText('Tu música, a otro nivel')).toBeInTheDocument();
  });

  it('should render the first paragraph about AudioVerse', () => {
    render(<Fourth />);
    expect(
      screen.getByText(
        /Lleva tu pasión por la música a nuevas alturas con AudioVerse/i
      )
    ).toBeInTheDocument();
  });

  it('should render the second heading', () => {
    render(<Fourth />);
    expect(screen.getByText('Encuentra tu tono perfecto')).toBeInTheDocument();
  });

  it('should render the second paragraph about AudioVerse collection', () => {
    render(<Fourth />);
    expect(
      screen.getByText(
        /Explora nuestra colección y elige el equipo que mejor se ajuste a tu estilo de vida/i
      )
    ).toBeInTheDocument();
  });

  it('should render the third heading', () => {
    render(<Fourth />);
    expect(
      screen.getByText('Estamos aquí para perfeccionar tu sonido')
    ).toBeInTheDocument();
  });

  it('should render the third paragraph about AudioVerse support', () => {
    render(<Fourth />);
    expect(
      screen.getByText(
        /Nuestro equipo de expertos está siempre disponible para ayudarte a sacar el máximo provecho de tus productos AudioVerse/i
      )
    ).toBeInTheDocument();
  });

  it('should render the image with alt text "rightSide"', () => {
    render(<Fourth />);
    const image = screen.getByAltText('rightSide');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://plus.unsplash.com/premium_photo-1663047632991-a2de16748c44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );
  });

  it('should render two separators', () => {
    render(<Fourth />);
    const separators = screen.getAllByTestId('separator');
    expect(separators.length).toBe(2);
  });
});
