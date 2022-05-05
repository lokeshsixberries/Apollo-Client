import { gql } from "@apollo/client";

export const LOAD_DATA = gql`
  mutation addNote($title: String!, $status: String!, $description: String!) {
    addNote(title: $title, status: $status, description: $description) {
      id
    }
  }
`;

export const UPDATE_DATA = gql`
  mutation updateNote(
    $id: ID!
    $title: String!
    $status: String!
    $description: String
  ) {
    updateNote(
      id: $id
      title: $title
      status: $status
      description: $description
    ) {
      id
    }
  }
`;
