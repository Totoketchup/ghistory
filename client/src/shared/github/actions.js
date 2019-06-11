function getListOfRepos(client) {
  return client.repos.list()
  .then((repos) => repos);
}

export default function wrapGithubClient(client) {
  console.log('CLIENT', client);
  return {
    getListOfRepos: () => getListOfRepos(client)
  }
}