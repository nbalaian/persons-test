import { useState } from 'react';
import {
  Heading,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Spinner,
  Button,
  Layer,
} from 'grommet';
import * as Styled from './person_details.styled';
import { usePersonDetailsHook } from '../../hooks/use_person_details_hook';
import { Trash } from 'grommet-icons';
import { deletePersonApi } from '../../api/delete_person';

export interface PersonDetailsProps {
  personId: number;
  loadPeople: (start?: number) => void;
  closeModal: () => void;
}

export function PersonDetails({
  personId,
  loadPeople,
  closeModal,
}: PersonDetailsProps) {
  const { details, isLoading } = usePersonDetailsHook({ personId });

  const [deletePersonAlertIsOpen, setDeletePersonAlertIsOpen] =
    useState<boolean>(false);

  const deletePerson = async (id: number) => {
    await deletePersonApi({ id })
      .then(() => {
        console.log('success');
      })
      .catch((err) => console.log(err))
      .finally(() => setDeletePersonAlertIsOpen(false));
  };

  const handleDeletePerson = () => {
    deletePerson(personId);
    closeModal();
    loadPeople(0);
  };

  return (
    <Styled.PersonDetailsContainer>
      {isLoading ? (
        <Styled.LoaderWrapper>
          <Spinner size='large' data-testid='spinner' />
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
          <Styled.DeletePersonContainer>
            <Trash onClick={() => setDeletePersonAlertIsOpen(true)} />
          </Styled.DeletePersonContainer>

          {/* getter to use alert or toast instead of modal, or rethink ux */}
          {deletePersonAlertIsOpen && (
            <Layer
              onEsc={() => setDeletePersonAlertIsOpen(false)}
              onClickOutside={() => setDeletePersonAlertIsOpen(false)}
            >
              <Styled.AlertWrapper>
                Are you sure you want to delete this person?
                <Styled.ButtonRow>
                  <Button
                    label='Cancel'
                    onClick={() => setDeletePersonAlertIsOpen(false)}
                  />
                  <Styled.DeleteButton
                    label='Yes'
                    onClick={handleDeletePerson}
                  />
                </Styled.ButtonRow>
              </Styled.AlertWrapper>
            </Layer>
          )}
        </>
      )}
    </Styled.PersonDetailsContainer>
  );
}
