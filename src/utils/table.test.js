import { sortRepos } from './table.util';

const testData = [
  {"name":"a","forks":2,"open_issues":3},
  {"name":"b","forks":4,"open_issues":4},
  {"name":"c","forks":1,"open_issues":2},
  {"name":"d","forks":3,"open_issues":1},
];

describe('sortRepos', () => {
  it('Should return an empty array', () => {
    const result = sortRepos([], 'notreal', 'descending', 'string');
    expect(result).toEqual([]);
  });

  it('Should sort a numerical value in descending order', () => {
    const result = sortRepos(testData, 'forks', 'descending', 'number');
    expect(result[0].forks).toEqual(4);
    expect(result[3].forks).toEqual(1);
  });

  it('Should sort a numerical value in ascending order', () => {
    const result = sortRepos(testData, 'forks', 'ascending', 'number');
    expect(result[0].forks).toEqual(1);
    expect(result[3].forks).toEqual(4);
  });

  it('Should sort a string value in descending order', () => {
    const result = sortRepos(testData, 'name', 'descending', 'string');
    expect(result[0].name).toEqual('d');
    expect(result[3].name).toEqual('a');
  });

  it('Should sort a string value in ascending order', () => {
    const result = sortRepos(testData, 'name', 'ascending', 'string');
    expect(result[0].name).toEqual('a');
    expect(result[3].name).toEqual('d');
  });
})
