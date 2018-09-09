/**
 * Sorts an array of repos based on a property within them
 * @param {Array} repos 
 * @param {string} key property of the repo object used to sort alphabetically
 * @param {string} direction direction to sort from
 * @param {string} type type of data being sorted. Either string or number.
 */
export function sortRepos(repos, key, direction, type) {
  if (type === 'string') {
    return sortName(repos, key, direction);
  }

  if (direction === 'ascending') {
    return repos.sort((a, b) => {
      return a[key] - b[key];
    });
  } else {
    return repos.sort((a, b) => {
      return b[key] - a[key];
    });
  }

}

/**
 * Sorts an array of repo objects alphabetically based on the key in the object
 * @param {Array} repos 
 * @param {string} key property of the repo object used to sort alphabetically
 * @param {string} direction direction to sort from
 */
export function sortName (repos, key, direction) {
  if (direction === 'ascending') {
    
    return repos.sort((a, b) => {
      const nameA = a[key].toUpperCase();
      const nameB = b[key].toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  return repos.sort((a, b) => {
    const nameA = a[key].toUpperCase();
    const nameB = b[key].toUpperCase();

    if (nameB < nameA) {
      return -1;
    }
    if (nameB > nameA) {
      return 1;
    }

    return 0;
  });
}
