import { gql } from "@apollo/client/core";

/**
 * Fetch id and name for all counties
 * @returns a list of all counties with id and name
 */
export default function GET_ALL_COUNTIES() {
  return gql`
    query Counties {
      counties {
        _id
        name
      }
    }
  `;
}
