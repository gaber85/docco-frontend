import { schema } from 'normalizr';

// const language = new schema.Entity('languages',{},{ idAttribute: 'iso_639_1'
// });

// const party = new schema.Entity('parties');

// const country = new schema.Entity('countries', {},
// { idAttribute: 'iso_3166_1'
// });

const party = new schema.Entity('parties');
const proposal = new schema.Entity('proposals');


// );
// const proposalSchema = new schema.Entity('proposal');

// const user = new schema.Entity('user');

const negotiationSchema = new schema.Entity('negotiations', {
  yourDetails: party,
  yourContent: proposal,
  theirDetails: party,
  theirContent: proposal

});

// export const currentNegotiationSchema = new schema.Entity('currentNegotiation',undefined,{
//   idAttribute: 'negotiation_id'
// });

export {
  negotiationSchema,
  party
};

