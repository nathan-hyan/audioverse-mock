import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from './Accordion';
import { describe, it, expect } from 'vitest';

describe('Accordion', () => {
  const title = 'Test Accordion Title';
  const content = 'Test Accordion Content';

  it('should render the accordion title', () => {
    render(
      <Accordion id='test-accordion' title={title}>
        {content}
      </Accordion>
    );

    // Check if the title is rendered
    const accordionTitle = screen.getByText(title);
    expect(accordionTitle).toBeInTheDocument();
  });

  it('should not show content when checkbox is not checked', () => {
    render(
      <Accordion id='test-accordion' title={title}>
        {content}
      </Accordion>
    );

    // Initially, the content should not be visible
    const accordionContent = screen.getByText(content);
    expect(accordionContent).not.toBeVisible();
  });

  it('should toggle the content when the checkbox is clicked', async () => {
    render(
      <Accordion id='test-accordion' title={title}>
        {content}
      </Accordion>
    );

    // Get the checkbox input and the content
    const checkbox = screen.getByRole('checkbox');
    const accordionContent = screen.getByText(content);

    // Initially, the content should not be visible
    await waitFor(() => expect(accordionContent).toHaveStyle('height: 0px'));

    // Simulate checking the checkbox
    userEvent.click(checkbox);

    await waitFor(() => expect(checkbox).toBeChecked());
    await waitFor(() => expect(accordionContent).toHaveStyle('height: auto'));

    // Simulate unchecking the checkbox
    userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).not.toBeChecked());
    await waitFor(() => expect(accordionContent).toHaveStyle('height: 0px'));
  });
});
