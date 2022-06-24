import React, { useState, useCallback } from 'react';
import { Tracker } from './Tracker';
import { Text } from './Text';
import './style.css';

export default function App() {
  return (
    <>
      <Tracker />
      <Text />
    </>
  );
}
