import { useEffect } from 'react';

/**
 * Content Protection Component
 * Protects against content copying, right-click, and keyboard shortcuts
 */
export function ContentProtection() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection on specific elements
    const disableSelection = () => {
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
      document.body.style.mozUserSelect = 'none';
      document.body.style.msUserSelect = 'none';
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (Dev Tools)
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+I (Dev Tools)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+C (Copy) - optional, can be too restrictive
      // if (e.ctrlKey && e.keyCode === 67) {
      //   e.preventDefault();
      //   return false;
      // }

      return true;
    };

    // Disable drag and drop of images
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    disableSelection();

    // Cleanup on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.body.style.userSelect = 'auto';
      document.body.style.webkitUserSelect = 'auto';
      document.body.style.mozUserSelect = 'auto';
      document.body.style.msUserSelect = 'auto';
    };
  }, []);

  return null; // This component doesn't render anything
}
