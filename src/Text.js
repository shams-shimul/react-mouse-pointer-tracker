import React, { memo } from 'react';

export const Text = memo(() => {
  console.log('Text rendered');

  return <h1>Try to move your mouse over here</h1>;
});
