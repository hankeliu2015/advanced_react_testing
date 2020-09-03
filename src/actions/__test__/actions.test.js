import { saveComment } from '../index.js';
import { SAVE_COMMENT } from '../types.js';

describe("action test", () => {
  it('action has correct type', () => {
    let newAction = saveComment();
    expect(newAction.type).toEqual(SAVE_COMMENT);
  });

  it('action has correct payload', () => {
    let newAction = saveComment('my comments');
    expect(newAction.payload).toEqual("my comments");
  });
})
