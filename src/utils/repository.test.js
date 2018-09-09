import { getRepos, getCommits } from './repository.util';

it('Pulls repo information for a real GitHub repository', async () => {
  const TEST_GH_ORG = 'Netflix';

  const testData = await getRepos(TEST_GH_ORG);
  console.log(testData);
});
