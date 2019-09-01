function getListOfRepos(client) {
  return client.repos.list()
  .then((result) => {
    if (result.status >= 400) {
      throw new Error(result.data);
    }
    return result.data;
  });
}

function getCurrentRateLimit(client) {
  return client.rateLimit.get()
  .then((result) => {
    if (result.status >= 400) {
      throw new Error(result.data);
    }
    return result.data.rate.remaining;
  });
}

export default function wrapGithubClient(client) {
  return {
    getCurrentRateLimit: () => getCurrentRateLimit(client),
    getListOfRepos: () => getListOfRepos(client)
  }
}
