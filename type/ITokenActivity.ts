export interface ITokenActivity {
  coin_amount: number;
  coin_type: number
  // collection_data_id_hash: string
  collection_name: string
  creator_address: string
  // event_account_address: string
  // event_creation_number: number
  // event_index: number
  from_address: string
  name: string
  to_address: string
  token_amount: number
  transfer_type: string
  transaction_timestamp: number
}
