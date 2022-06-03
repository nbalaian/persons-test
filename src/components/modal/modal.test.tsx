import { waitFor, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal, ModalProps } from './modal';

const defaultModalProps: ModalProps = {
  title: 'Test Modal',
  children: <div>Modal children</div>,
  onCancelClick: jest.fn(),
};

describe('Modal component tests', () => {
  const renderComponent = (): void => {
    render(<Modal {...defaultModalProps} />);
  };

  it('should render modal component and display modal title', async () => {
    renderComponent();

    expect(screen.getByText(defaultModalProps.title)).toBeInTheDocument();
  });

  it('should close modal if user click on cancel button', async () => {
    renderComponent();

    const cancelBtn = screen.getByTestId('cancel-btn');

    expect(cancelBtn).toBeInTheDocument();
    userEvent.click(cancelBtn);

    await waitFor(() => {
      expect(defaultModalProps.onCancelClick).toBeCalled();
    });
  });
});
