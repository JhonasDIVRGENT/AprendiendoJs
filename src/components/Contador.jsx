import React from 'react';
export default function Contador({ value, onIncrement }) {
  return (
    <>
      <p>Has hecho clic {value} {value === 1 ? 'vez' : 'veces'}.</p>
      <button onClick={onIncrement}>
        Aumentar contador
      </button>
    </>
  )
}
