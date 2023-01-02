// import { render, screen } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';
import { ReactDOM } from 'react-dom';
import React from 'react';

describe('Author Quiz',()=>{
  it('renders without crashing',()=>{
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz />, div);
  })
});

// test('renders learn react link', () => {
//   render(<AuthorQuiz />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

