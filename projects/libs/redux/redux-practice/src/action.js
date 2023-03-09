export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });
export const rnd = (value) => ({
  type: 'RANDOM',
  payload: (value = Math.floor(Math.random() * 10)),
});