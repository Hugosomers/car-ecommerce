import React from 'react';
import '../css/Loading.css';

export default function Loading() {
  return (
    <div className="loading">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
