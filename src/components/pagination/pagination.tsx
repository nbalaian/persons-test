import * as Styled from './pagination.styled';

export interface PaginationProps {
  isPrevActive: boolean;
  isNextActive: boolean;
  onNextClick: () => void;
  onPrevClick: () => void;
}

export function Pagination({
  isPrevActive,
  isNextActive,
  onNextClick,
  onPrevClick,
}: PaginationProps) {
  return (
    <Styled.Container>
      <Styled.IconPrev
        size='large'
        $isActive={isPrevActive}
        onClick={onPrevClick}
      />
      <Styled.IconNext
        size='large'
        $isActive={isNextActive}
        onClick={onNextClick}
      />
    </Styled.Container>
  );
}
