import { saveComment } from '../index.js';
import { SAVE_COMMENT } from '../types.js';

describe("action test", () => {
  it('action has a type save comment', () => {
    let newAction = saveComment();
    expect(newAction.type).toEqual(SAVE_COMMENT);
  });

  it('action has correct payload with text', () => {
    let newAction = saveComment('my comments');
    expect(newAction.payload).toEqual("my comments");
  });
})
