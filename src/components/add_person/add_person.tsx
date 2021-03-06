import * as Styled from './add_person.styled';
import { addPersonApi } from '../../api/add_person';
import { NewPerson, Organization } from '../../api/interfaces';
import { Box, Form, FormField, Select, TextInput } from 'grommet';
import { useState, useEffect } from 'react';
import { getOrganizationsApi } from '../../api/get_organizations';

export interface AddPersonProps {
  loadPeople: (start?: number) => void;
  closeModal: () => void;
}

interface PersonFormData {
  name: string;
  organization: {
    label: string;
    value: number;
  };
}

const defaultPersonData: PersonFormData = {
  name: '',
  organization: {
    label: '',
    value: 0,
  },
  // can be added later
  // phone?: PersonPhone[];
  // email?: PersonEmail[];
};

export function AddPerson({ loadPeople, closeModal }: AddPersonProps) {
  const [formValue, setValue] = useState<PersonFormData>(defaultPersonData);
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const loadOrganizations = () => {
    getOrganizationsApi()
      .then((data) => {
        const normalized = data.data.data.map(({ id, name }: Organization) => ({
          label: name,
          value: id,
        }));
        setOrganizations(normalized);
      })
      .catch((err) => console.log(err));
  };

  const addPerson = async () => {
    const person: NewPerson = {
      name: formValue.name,
      org_id: formValue.organization.value,
    };
    addPersonApi(person)
      .then(() => {
        loadPeople(0);
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadOrganizations();
  }, []);

  const isSubmitDisabled = () =>
    !formValue.name || !formValue.organization.value;

  return (
    <Styled.AddPersonContainer>
      <Form
        data-testid='add-person-form'
        value={formValue}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() =>
          setValue({ name: '', organization: { label: '', value: 0 } })
        }
        onSubmit={addPerson}
      >
        <FormField name='name' htmlFor='text-input-name' label='Name'>
          <TextInput required id='text-input-name' name='name' />
        </FormField>
        <FormField
          name='organization'
          htmlFor='select-organization'
          label='Select Organization'
        >
          <Select
            id='select-organization'
            required
            labelKey='label'
            name='organization'
            options={organizations}
          />
        </FormField>

        <Box direction='row' gap='medium' margin='medium'>
          <Styled.FormButton
            type='reset'
            label='Reset Form'
            data-testid='reset'
          />
          <Styled.FormButton
            type='submit'
            label='Submit form'
            disabled={isSubmitDisabled()}
          />
        </Box>
      </Form>
    </Styled.AddPersonContainer>
  );
}
