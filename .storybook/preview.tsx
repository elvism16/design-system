import type { Preview } from '@storybook/react-vite';
import '../src/styles/global.css';

const preview: Preview = {
  initialGlobals: { theme: 'light' },

  globalTypes: {
    theme: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
  (Story, context) => {
    document.documentElement.dataset.theme = context.globals.theme;

    // Inline-Stile schlagen jede Layer-Reihenfolge; in der Docs-Ansicht bleibt Storybooks eigener Hintergrund
    if (context.viewMode !== 'docs') {
      document.body.style.backgroundColor = 'var(--ds-color-surface-canvas)';
      document.body.style.color = 'var(--ds-color-content-primary)';
    }

    return <Story />;
  },
],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
    toc: {
      title: 'Auf dieser Seite',
      headingSelector: 'h2, h3',
    },
  },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
  },
};

export default preview;