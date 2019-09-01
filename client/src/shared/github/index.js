import createClient from './client';
import wrapClient from './actions';

function createAndWrapClient(token) {
  const client = createClient(token);
  return wrapClient(client);
}

export default createAndWrapClient;