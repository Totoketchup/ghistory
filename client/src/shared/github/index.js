import createClient from './client';
import wrapClient from './actions';

function createAndWrapClient(token) {
  const client = createClient(token);
  console.log('created', client);
  return wrapClient(client);
}

export default createAndWrapClient;