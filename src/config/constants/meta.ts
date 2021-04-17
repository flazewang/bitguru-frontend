import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BitGuru',
  description:
    'Come and become a Guru with us!',
  image: 'https://pancakeswap.finance/images/easter-battle.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'PancakeSwap Easter Battle',
    description: 'Register now for the PancakeSwap Easter battle!',
    image: 'https://pancakeswap.finance/images/easter-battle.png',
  },
}
