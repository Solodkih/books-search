import React from 'react';
import './logo.scss'

export default function Logo({ className }) {
  return (
    <div className={`${className} logo`}>
      <div className="logo__title">MOVIES</div>
      <div className="logo__subtitle">SEARCH</div>
    </div>
  );
}
