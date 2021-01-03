export const getDataApi = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
  }
};
