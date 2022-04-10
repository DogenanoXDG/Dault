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
  ],
  donationAddress: 'xdg_3niceeeyiaa86k58zhaeygxfkuzgffjtwju9ep33z9c8qekmr3iuc95jbqc8', 
};
