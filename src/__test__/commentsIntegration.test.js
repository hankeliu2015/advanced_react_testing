import React from 'react';
import Root from '../root';
import { mount } from 'enzyme';
import App from '../components/App';
import moxios from 'moxios'

let wrapped;
beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'request 1'}, {name: 'request 2'}]
  })
})

afterEach(() => {
  moxios.uninstall();
})

it('fetch a list of comments and render them', (done) => {
  //render the entire app
  // find the fetch button and click on it
  // find a list of comments.
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  wrapped.find('.fetch-comments').simulate('click');
  //introduce a pause
  // setTimeout(() => {
  //   wrapped.update();
  //   expect(wrapped.find('li').length).toEqual(2);
  //   done();
  //   wrapped.unmount();
  // }, 100)

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
