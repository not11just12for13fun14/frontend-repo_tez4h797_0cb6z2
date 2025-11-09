import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineCanvas() {
  return (
    <div className="relative h-full w-full">
      <Spline
        scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
