import _ from 'lodash';
import Octokit from '@octokit/rest';
import retry from '@octokit/plugin-retry' ;
import throttling from '@octokit/plugin-throttling';

const OctokitWithPlugins = Octokit.plugin([
  retry,
  throttling
]);

function createClient(secretToken) {
  if (!_.isString(secretToken)) {
    throw new Error('The `secretToken` must be a String.');
  }
  const myOctokit = new OctokitWithPlugins({
    auth: secretToken,
    retry: {
      doNotRetry: ['429']
    },
    throttle: {
      onAbuseLimit: (retryAfter, options) => {
        // does not retry, only logs a warning
        myOctokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`)
      },
      onRateLimit: (retryAfter, options) => {
        myOctokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`)

        if (options.request.retryCount === 0) { // only retries once
          myOctokit.log.info(`Retrying after ${retryAfter} seconds!`)
          return true
        }
        return false;
      }
    }
  });
  return myOctokit;
}

export default createClient;