import React from 'react';

/**
 * Hook that executes a callback on click outside of the passed ref
 */
export function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void,
) {
  React.useEffect(() => {
    /**
     * Execute callback
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
