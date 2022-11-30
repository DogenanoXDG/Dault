export const environment = {
  production: true,
  desktop: false,
  currency: {
    id: 'xdg',
    name: 'Dogenano',
    ticker: 'XDG',
    precision: 26,
    maxSupply: 333248289000,
    prefix: 'xdg',
    supportsMyNanoNinja: false,
    ledgerWalletPrefix: `44'/165'/`,
  },
  backends: [
    {
      name: 'Dogenano Official',
      value: 'ninja',
      api: 'https://rpc.dogenano.io/proxy',
      ws: 'wss://ws.dogenano.io',
      auth: null,
      shouldRandom: true,
    },
    {
      name: 'MyEcoria Node',
      value: 'myecoria',
      api: 'https://dogerpc.myecoria.com',
      ws: 'wss://ws.dogenano.io',
      auth: null,
      shouldRandom: true,
    }
  ],
  representativeAccounts: [
    'xdg_1mz6am1zez5y8u87s7pkddagkag4xtub7bktn8wm6o5taekwypfww4p6frby', // XDG 1
  ],
  defaultRepresentatives: [
    {
      id: 'xdg_1mz6am1zez5y8u87s7pkddagkag4xtub7bktn8wm6o5taekwypfww4p6frby',
      name: 'Dogenano Official',
      warn: false,
    },
    {
      id: 'xdg_3trcizdrj8uck5f46onn3tomac7wgx5rfey7a1y5dp9q3dqyn6ccup688atx',
      name: 'MyEcoria',
      warn: false,
    }
  ],
  donationAddress: 'xdg_3dauit3e9fqzooonwxfio8rbe9m7a3pjen9qis5e4nqtzqd5qdp7ekhsdjcf', 
};
