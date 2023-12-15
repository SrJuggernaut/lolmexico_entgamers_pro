import { defineConfig } from '@pandacss/dev'
import entgamersPandaPreset from 'entgamers-panda-preset'

export default defineConfig({
  presets: [entgamersPandaPreset],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  outdir: 'src/styled-system',
  jsxFramework: 'react'
})
