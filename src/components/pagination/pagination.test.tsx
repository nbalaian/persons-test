import { waitFor, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination, PaginationProps } from './pagination';

const defaultPaginationProps: PaginationProps = {
  isPrevActive: false,
  isNextActive: true,
  onNextClick: jest.fn(),
  onPrevClick: jest.fn(),
};

describe('Pagination component tests', () => {
  const renderComponent = (): void => {
    render(<Pagination {...defaultPaginationProps} />);
  };

  it('should render pagination component', async () => {
    renderComponent();

    expect(screen.getByLabelText('Previous')).toBeInTheDocument();
    expect(screen.getByLabelText('Next')).toBeInTheDocument();
  });

  it('should call onNextClick if user click on next button', async () => {
    renderComponent();

    const nextBtn = screen.getByLabelText('Next');

    expect(nextBtn).toBeInTheDocument();
    userEvent.click(nextBtn);

    await waitFor(() => {
      expect(defaultPaginationProps.onNextClick).toBeCalled();
    });
  });

  it('should disable previous button if isPrevActive false', async () => {
    renderComponent();

    const prevBtn = screen.getByLabelText('Previous');

    expect(prevBtn).toBeInTheDocument();
    expect(() => userEvent.click(prevBtn)).toThrow();
    expect(defaultPaginationProps.onPrevClick).not.toHaveBeenCalled();
  });
});
