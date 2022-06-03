import { Heading } from 'grommet';
import { Close } from 'grommet-icons';
import * as Styled from './modal.styled';

export interface ModalProps {
  children: React.ReactNode;
  title: string;
  onCancelClick: () => void;
}

export function Modal({ children, title, onCancelClick }: ModalProps) {
  return (
    <Styled.ModalWrapper>
      <Styled.ModalHeader>
        <Heading level='5' margin='0'>
          {title}
        </Heading>
        <Close onClick={onCancelClick} />
      </Styled.ModalHeader>
      <Styled.ModalBody>{children}</Styled.ModalBody>
      <Styled.ModalFooter>
        <Styled.ModalBtn
          data-testid='cancel-btn'
          secondary
          onClick={onCancelClick}
          type='button'
          label='Back'
        />
      </Styled.ModalFooter>
    </Styled.ModalWrapper>
  );
}
