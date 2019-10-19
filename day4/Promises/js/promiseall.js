let urls = [
    'https://api.github.com/users/tarun27in',
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/brunocvcunha'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => alert(`${response.url}: ${response.status}`)
    ));