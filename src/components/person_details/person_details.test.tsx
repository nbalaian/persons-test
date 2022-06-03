import { render, screen, waitFor } from '@testing-library/react';
import { PersonDetails, PersonDetailsProps } from './person_details';

const defaultProps: PersonDetailsProps = {
  personId: 7,
  loadPeople: jest.fn(),
  closeModal: jest.fn(),
};

describe('PersonDetails component tests', () => {
  const renderComponent = (): void => {
    render(<PersonDetails {...defaultProps} />);
  };

  it('should render spinner while loading', async () => {
    renderComponent();

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should hide spinner after loading', async () => {
    renderComponent();

    const personName = 'Brenton Moran'; // hack, should be mocked on api level

    await waitFor(() => {
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });

    expect(screen.getByText(personName)).toBeInTheDocument();
  });

  // test for deleting
});
