async function fetchData() {
  try {
    let data = 'file fetched';
    return Promise.resolve(data)
  } catch(err) {
    throw err;
  }
}

fetchData()
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log('Promise completed'))
