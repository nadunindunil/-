export const ACTION_SAMPLE = 'ACTION_SAMPLE';

export function addValue(number) {
  return { type: ACTION_SAMPLE, number: number };
}
