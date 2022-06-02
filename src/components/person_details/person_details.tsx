import {
  Heading,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Spinner,
} from 'grommet';
import * as Styled from './person_details.styled';
import { usePersonDetailsHook } from '../../hooks/use_person_details_hook';

interface PersonDetailsProps {
  personId: number;
}

export function PersonDetails({ personId }: PersonDetailsProps) {
  const { details, isLoading } = usePersonDetailsHook({ personId });
  console.log(details);
  return (
    <Styled.PersonDetailsContainer>
      {isLoading ? (
        <Styled.LoaderWrapper>
          <Spinner size='large' />
        </Styled.LoaderWrapper>
      ) : (
        <>
          <Styled.PersonAvatar>
            <img src='https://i.pravatar.cc/100' alt='avatar' />
          </Styled.PersonAvatar>
          <Heading level={4} textAlign='center' margin='0'>
            {details?.name}
          </Heading>
          <Styled.PersonNumber>{details?.phone[0].value}</Styled.PersonNumber>
          <Styled.PersonInfo>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell scope='row'>
                    <strong>Email</strong>
                  </TableCell>
                  <TableCell>{details?.cc_email}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell scope='row'>
                    <strong>Organization</strong>
                  </TableCell>
                  <TableCell>{details?.org_name}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell scope='row'>
                    <strong>Assistant</strong>
                  </TableCell>
                  <TableCell>Assistant</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell scope='row'>
                    <strong>Groups</strong>
                  </TableCell>
                  <TableCell>Groups</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell scope='row'>
                    <strong>Location</strong>
                  </TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Styled.PersonInfo>
        </>
      )}
    </Styled.PersonDetailsContainer>
  );
}
