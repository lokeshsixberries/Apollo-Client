import { gql } from "@apollo/client";

export const GET_DATA = gql`
  {
    notes {
      id
      title
      status
      description
    }
  }
`;

export const GET_DATA_BY_ID = gql`
  query note($id: ID!) {
    note(id: $id) {
      title
      status
      description
    }
  }
`;
