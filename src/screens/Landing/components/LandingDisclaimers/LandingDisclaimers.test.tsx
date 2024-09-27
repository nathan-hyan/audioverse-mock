import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LandingDisclaimers from './LandingDisclaimers';

describe('LandingDisclaimers Component', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<LandingDisclaimers />);
    expect(container).toMatchSnapshot();
  });
});
