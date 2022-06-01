export interface Person {
  name: string;
  org_name: string;
  id: number;
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
