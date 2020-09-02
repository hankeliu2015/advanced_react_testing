import {  SAVE_COMMENT } from './types';

export function saveCommnent(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
