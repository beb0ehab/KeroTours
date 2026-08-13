import { useEffect, useState } from 'react';

/**
 * ScaleWrap — shrinks any section to match the desktop layout on mobile.
 *
 * Usage: wrap a section's inner content. The desktop canvas is 1100px wide;
 * on any viewport narrower than that the content is zoomed down proportionally
 * so it looks identical to desktop, just smaller.
 *
 * Leave sections out of ScaleWrap when their content naturally adapts well
 * to a single column (e.g. footer, forms, plain text blocks).
 *
 *   <ScaleWrap>
 *     <div className="hero-inner"> … </div>
 *   </ScaleWrap>
 */

const DESK_W = 1100; // design canvas width

export default function ScaleWrap({ children, maxW = DESK_W }) {
  const [zoom, setZoom] = useState(() =>
    typeof window !== 'undefined' ? Math.min(1, window.innerWidth / maxW) : 1
  );

  useEffect(() => {
    function update() {
      setZoom(Math.min(1, window.innerWidth / maxW));
    }
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, [maxW]);

  return (
    <div style={{ zoom: zoom < 1 ? zoom : undefined }}>
      {children}
    </div>
  );
}
