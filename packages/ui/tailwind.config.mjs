import tailwindConfig from '@repo/tailwind-config/tailwind.config';

export default {
  ...tailwindConfig,
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      ...tailwindConfig.theme.extend,
    },
  },
  content: [
    'src/**/*.{js,jsx,ts,tsx,css}',
    'src/**/*.stories.{js,jsx,ts,tsx,mdx}',
    '.storybook/**/*.{js,jsx,ts,tsx,html}',
  ],
};
