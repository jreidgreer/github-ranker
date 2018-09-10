import * as rp from 'request-promise';

import { getRepos, getRepoMeta, getCommits } from './repository.util';

jest.mock('request-promise');

describe('getRepos', () => {
  const testData = [
    {"name":"a","forks":2,"open_issues":3},
    {"name":"b","forks":4,"open_issues":4},
    {"name":"c","forks":1,"open_issues":2},
    {"name":"d","forks":3,"open_issues":1},
  ];

  it('Should return proper data', async () => {
    rp.get.mockReturnValue(Promise.resolve(JSON.stringify(testData)));
    const result = await getRepos('Netflix');
  
    expect(result).toEqual(testData);
  });

  it('Should return empty array upon error', async () => {
    rp.get.mockReturnValue(Promise.reject(new Error()));
    const result = await getRepos('doesnotexistisnotreal');
  
    expect(result).toEqual([]);
  });
});

describe('getRepoMeta', () => {
  const testData = {"name":"a","forks":2,"open_issues":3};

  it('Should return proper data', async () => {
    rp.get.mockReturnValue(Promise.resolve(JSON.stringify(testData)));
    const result = await getRepoMeta('Netflix', 'Hystrix');
  
    expect(result).toEqual(testData);
  });

  it('Should return empty object upon error', async () => {
    rp.get.mockReturnValue(Promise.reject(new Error()));
    const result = await getRepoMeta('fake', 'doesnotexistisnotreal');
  
    expect(result).toEqual({});
  });
});

describe('getCommits', () => {
  const testData = [
    {"name":"a","forks":2,"open_issues":3},
    {"name":"b","forks":4,"open_issues":4},
    {"name":"c","forks":1,"open_issues":2},
    {"name":"d","forks":3,"open_issues":1},
  ];

  it('Should return proper data', async () => {
    rp.get.mockReturnValue(Promise.resolve(JSON.stringify(testData)));
    const result = await getCommits('Netflix', 'Hystrix');
  
    expect(result).toEqual(testData);
  });

  it('Should return empty array upon error', async () => {
    rp.get.mockReturnValue(Promise.reject(new Error()));
    const result = await getCommits('fake', 'doesnotexistisnotreal');
  
    expect(result).toEqual([]);
  });
});
