import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../app/components/home';

test('renders default elements', () => {
  renderer(<Home />);
});
