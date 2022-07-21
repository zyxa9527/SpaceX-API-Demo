import gql from "graphql-tag";

export const GET_SPACE_MISSION = gql`
  query GetSpaceMission($limit: Int!, $search: String!) {
    launchesPast(limit: $limit, find: { mission_name: $search }) {
      mission_name
      id
      launch_date_local
      launch_site {
        site_name_long
        site_name
      }
      links {
        video_link
      }
    }
  }
`;

export const GET_USERS_INFO = gql`
  {
    users {
      id
      name
      rocket
      timestamp
      twitter
    }
  }
`;
