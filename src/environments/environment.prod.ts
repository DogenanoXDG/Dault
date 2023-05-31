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
    'xdg_1france7tsdxw3r9jfe5kur4b1nayd8b8wknqbccy8owfgs765dn98rkwojd', 
    'xdg_1e4ecrhmcws6kwiegw8dsbq5jstq7gqj7fspjmgiu11q55s6xnsnp3t9jqxf',
    'xdg_1mz6am1zez5y8u87s7pkddagkag4xtub7bktn8wm6o5taekwypfww4p6frby', // XDG 1
    'xdg_1kxzwigqegun4a4xw5yjgpk99iqgxt5uftd5d6e6h4omemyexbu3cmtmm4sa',
    'xdg_1sa6qhb31u7y8hqkz3p5egc1buyoe6k8pyr1kgzifwhw9yzuhu3i4k5etzfg'
  ],
  defaultRepresentatives: [
    {
      id: 'xdg_1france7tsdxw3r9jfe5kur4b1nayd8b8wknqbccy8owfgs765dn98rkwojd',
      name: 'MyEcoria France',
      warn: false,
    },
    {
      id: 'xdg_1e4ecrhmcws6kwiegw8dsbq5jstq7gqj7fspjmgiu11q55s6xnsnp3t9jqxf',
      name: 'Nanswap',
      warn: false,
    },
    {
      id: 'xdg_1mz6am1zez5y8u87s7pkddagkag4xtub7bktn8wm6o5taekwypfww4p6frby',
      name: 'DogeNano #1',
      warn: false,
    },
    {
      id: 'xdg_1kxzwigqegun4a4xw5yjgpk99iqgxt5uftd5d6e6h4omemyexbu3cmtmm4sa',
      name: 'DogeNano #2',
      warn: false,
    },
    {
      id: 'xdg_1sa6qhb31u7y8hqkz3p5egc1buyoe6k8pyr1kgzifwhw9yzuhu3i4k5etzfg',
      name: 'DogeNano #3',
      warn: false,
    },    

  ],
  donationAddress: 'xdg_3dauit3e9fqzooonwxfio8rbe9m7a3pjen9qis5e4nqtzqd5qdp7ekhsdjcf', 
};
