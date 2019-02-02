import { normalize, schema } from 'normalizr';

// const language = new schema.Entity('languages',{},{ idAttribute: 'iso_639_1'
// });

// const party = new schema.Entity('parties');

// const country = new schema.Entity('countries', {},
// { idAttribute: 'iso_3166_1'
// });

// const company = new schema.Entity('companies',
//   {origin_country: country},
// );
const party = new schema.Entity('parties');

// const user = new schema.Entity('user');

const negotiationSchema = new schema.Entity('negotiations',{
  party_a: party,
  party_b: party
},{
  idAttribute: 'negotiation_id'
});

// export const currentNegotiationSchema = new schema.Entity('currentNegotiation',undefined,{
//   idAttribute: 'negotiation_id'
// });

export default negotiationSchema;

