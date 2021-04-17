import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 106,
    stakingToken: tokens.cake,
    earningToken: tokens.broobee,
    contractAddress: {
      97: '',
      56: '0x189d8228CdfDc404Bd9e5bD65ff958cb5fd8855c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '14.4675',
  },
  {
    sousId: 104,
    stakingToken: tokens.cake,
    earningToken: tokens.alpa,
    contractAddress: {
      97: '',
      56: '0x8f84106286c9c8A42bc3555C835E6e2090684ab7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.23495',
  },
  {
    sousId: 100,
    stakingToken: tokens.cake,
    earningToken: tokens.eps,
    contractAddress: {
      97: '',
      56: '0xebb87dF24D65977cbe62538E4B3cFBD5d0308642',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.07716',
  },
  {
    sousId: 75,
    stakingToken: tokens.cake,
    earningToken: tokens.bifi,
    contractAddress: {
      97: '',
      56: '0xB4C68A1C565298834360BbFF1652284275120D47',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00007234',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 72,
    stakingToken: tokens.cake,
    earningToken: tokens.bunny,
    contractAddress: {
      97: '',
      56: '0xaDdAE5f4dB84847ac9d947AED1304A8e7D19f7cA',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00289',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 67,
    stakingToken: tokens.cake,
    earningToken: tokens.belt,
    contractAddress: {
      97: '',
      56: '0x6f0037d158eD1AeE395e1c12d21aE8583842F472',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00868',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 60,
    stakingToken: tokens.cake,
    earningToken: tokens.watch,
    contractAddress: {
      97: '',
      56: '0xC58954199E268505fa3D3Cb0A00b7207af8C2D1d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.3472',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 53,
    stakingToken: tokens.cake,
    earningToken: tokens.dodo,
    contractAddress: {
      97: '',
      56: '0xae3001ddb18A6A57BEC2C19D71680437CA87bA1D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0578',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 43,
    stakingToken: tokens.cake,
    earningToken: tokens.lit,
    contractAddress: {
      97: '',
      56: '0x1714bAAE9DD4738CDEA07756427FA8d4F08D9479',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.231',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 42,
    stakingToken: tokens.cake,
    earningToken: tokens.hget,
    contractAddress: {
      97: '',
      56: '0xcCD0b93cC6ce3dC6dFaA9DB68f70e5C8455aC5bd',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0138',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 41,
    stakingToken: tokens.cake,
    earningToken: tokens.bdo,
    contractAddress: {
      97: '',
      56: '0x9cB24e9460351bC51d4066BC6AEd1F3809b02B78',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.075',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 40,
    stakingToken: tokens.cake,
    earningToken: tokens.egld,
    contractAddress: {
      97: '',
      56: '0x2dcf4cDFf4Dd954683Fe0a6123077f8a025b66cF',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.001215',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 39,
    stakingToken: tokens.cake,
    earningToken: tokens.ust,
    contractAddress: {
      97: '',
      56: '0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1157',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 38,
    stakingToken: tokens.cake,
    earningToken: tokens.wsote,
    contractAddress: {
      97: '',
      56: '0xD0b738eC507571176D40f28bd56a0120E375f73a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.23',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 37,
    stakingToken: tokens.cake,
    earningToken: tokens.front,
    contractAddress: {
      97: '',
      56: '0xf7a31366732F08E8e6B88519dC3E827e04616Fc9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.2546',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 36,
    stakingToken: tokens.cake,
    earningToken: tokens.helmet,
    contractAddress: {
      97: '',
      56: '0x9F23658D5f4CEd69282395089B0f8E4dB85C6e79',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.81',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 7,
    stakingToken: tokens.cake,
    earningToken: tokens.inj,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
  },
]

export default pools
