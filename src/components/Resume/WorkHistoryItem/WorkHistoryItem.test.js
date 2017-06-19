import React from 'react';
import ReactDOM from 'react-dom';
import WorkHistoryItem from './WorkHistoryItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SiteWrap />, div);
});