import {  SAVE_COMMENT } from './types';

export function saveCommnet(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
