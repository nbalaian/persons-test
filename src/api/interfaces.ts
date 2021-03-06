export interface Person {
  name: string;
  org_name: string;
  id: number;
}

export interface NewPerson {
  name: string;
  org_id: number;
  phone?: PersonPhone[];
  email?: PersonEmail[];
}

export interface GetPeopleResponse {
  success: boolean;
  data: Person[];
  additional_data: {
    pagination: {
      start: number;
      limit: number;
      more_items_in_collection: boolean;
    };
  };
}

export interface FilterPeopleResponse {
  success: boolean;
  data: {
    items: FilteredPeopleItem[];
  };
}

interface FilteredPeopleItem {
  item: Person;
  result_score: number;
}

export interface GetPeopleApiParams {
  term?: string;
  start?: number;
  limit?: number;
  api_token: string;
}

export interface GetPeopleParams {
  term?: string;
  start?: number;
  limit?: number;
}

export interface DefaultApiParam {
  api_token: string;
}

export interface PersonPhone {
  label: string;
  primary: boolean;
  value: string;
}

export interface PersonEmail {
  label: string;
  primary: boolean;
  value: string;
}

export interface PersonDetails {
  id: number;
  org_name: string;
  name: string;
  phone: PersonPhone[];
  cc_email: string;

  // assistant
  // groups
  // location
}

export interface Organization {
  id: number;
  name: string;
}
