import React from 'react'
import {defineConfig, buildLegacyTheme} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import Logo from './src/assets/logo'


const props = {
  '--my-white': '#fff',
  '--my-cream': '#F8F6F4',
  '--my-black': '#1a1a1a',
  '--my-blue': '#85586F',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const theme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-cream'],
  '--component-text-color': props['--my-black'],

  /* Brand */
  '--brand-primary': props['--my-blue'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-blue'],
})


export default defineConfig({
  name: 'default',
  title: 'Archive',
  projectId: 'm2acf3tv',
  dataset: 'production',
  plugins: [deskTool(), unsplashImageAsset()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: ({title, renderDefault, ...props}) => {
        return <div title={title} style={{ height: "64px", width: "64px", margin: "0.5rem 1rem" }}><Logo style={{ height: "100%", width: "100%" }} /></div>
      }
    },
  },
  theme,
})
