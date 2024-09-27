import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('should display the current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      `Copyright © ${currentYear} Hy-An. Todos los derechos reservados.`
    );

    expect(copyrightText).toBeInTheDocument();
  });

  it('should contain the correct links', () => {
    render(<Footer />);

    const linkedinLink = screen.getByText('LinkedIn');
    const personalPageLink = screen.getByText('Página personal');

    expect(linkedinLink.closest('a')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/exequielm2048/'
    );
    expect(personalPageLink.closest('a')).toHaveAttribute(
      'href',
      'https://hyan.dev'
    );
  });

  it('should scroll to top when "Ir arriba" button is clicked', () => {
    window.scrollTo = vi.fn();
    render(<Footer />);
    const button = screen.getByText('Ir arriba');
    button.click();

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
