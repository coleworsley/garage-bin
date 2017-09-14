import { GARAGE_ENDPOINT } from './utils/constants';

export const getItems = (component) => {
  fetch(GARAGE_ENDPOINT)
    .then(res => res.json())
    .then(items => {
      component.setState({ items, error: '' })
    })
    .catch(error => {
      component.setState({ error })
    })
};

export const postItem = (component, body) => {
  fetch(GARAGE_ENDPOINT, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  })
  .then(res => res.json())
  .then(item => {
    const { items } = component.state;
    const newState = [...items].push(item);

    component.setState({ items: newState, error: '' })
  })
  .catch((error) => {
    component.setState({ error })
  })
};

export const updateItem = () => {
  // fetch(GARAGE_ENDPOINT)
};
