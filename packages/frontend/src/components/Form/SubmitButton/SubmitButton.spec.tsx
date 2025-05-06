import { SubmitButton } from './SubmitButton';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('SubmitButton Component', () => {
  it('should render button with the provided text', () => {
    render(<SubmitButton text="Submit" disabled={false} />);

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should not trigger any action when clicked if disabled', () => {
    const handleSubmit = jest.fn();
    render(
      <form onSubmit={handleSubmit}>
        <SubmitButton text="Submit" disabled={true} />
      </form>
    );
    const button = screen.getByRole('button', { name: /submit/i });

    userEvent.click(button);

    expect(button).toBeDisabled();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('should be clicked when not disabled',  () => {
    const handleSubmit = jest.fn();
    render(
      <form onSubmit={handleSubmit}>
        <SubmitButton text="Submit" disabled={false} />
      </form>
    );
    const button = screen.getByRole('button', { name: /submit/i });

    userEvent.click(button);

    expect(button).toBeEnabled();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
