import { gql } from 'apollo-boost'

export const GET_TOKEN_ACTIVITIES = gql`
  query {
    token_activities(where: {transfer_type: {_eq: "0x3::token::MintTokenEvent"}}) {
      collection_name
      creator_address
      name
      from_address
      token_amount
      transaction_timestamp
      to_address
      coin_type
      coin_amount
      transfer_type
    }
  }
`
