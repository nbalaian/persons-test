import { Heading } from 'grommet';
import { Close } from 'grommet-icons';
import * as Styled from './modal.styled';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onBtnClick: () => void;
  onCancelClick: () => void;
}

export function Modal({
  children,
  title,
  onCancelClick,
  onBtnClick,
}: ModalProps) {
  return (
    <Styled.ModalWrapper>
      <Styled.ModalHeader>
        <Heading level='5' margin='0'>
          Person Information
        </Heading>
        <Close onClick={onCancelClick} />
      </Styled.ModalHeader>
      <Styled.ModalBody>{children}</Styled.ModalBody>
      <Styled.ModalFooter>
        <Styled.ModalBtn secondary onClick={onBtnClick} type='button'>
          Back
        </Styled.ModalBtn>
      </Styled.ModalFooter>
    </Styled.ModalWrapper>
  );
}
