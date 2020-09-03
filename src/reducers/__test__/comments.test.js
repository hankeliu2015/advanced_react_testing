import commentsReducer from '../comments';
import { SAVE_COMMENT} from '../../actions/types';

it('handle action type with SAVE_COMMENT', () => {
  let action = {type: SAVE_COMMENT, payload: "My comments"};
  let newState = commentsReducer([], action);
  expect(newState).toEqual(['My comments']);
})

it('handle action with unknow type', () => {
  let action = {type: 'Unknow Type'};
  let newState = commentsReducer([], action);
  expect(newState).toEqual([]);
})
