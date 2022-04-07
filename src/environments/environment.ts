// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  desktop: false,
  currency: {
    id: 'xdg',
    name: 'Dogenano',
    ticker: 'XDG',
    precision: 28,
    maxSupply: 133248289,
    prefix: 'xdg',
    supportsMyNanoNinja: false,
    ledgerWalletPrefix: `44'/165'/`,
  },
  backends: [
    {
      name: 'My Nano Ninja',
      value: 'ninja',
      api: 'https://mynano.ninja/api/node',
      ws: 'wss://ws.mynano.ninja',
      auth: null,
      shouldRandom: true,
    },
    {
      name: 'Nanos.cc',
      value: 'nanos',
      api: 'https://nault.nanos.cc/proxy',
      ws: 'wss://nault-ws.nanos.cc',
      auth: null,
      shouldRandom: true,
    },
    {
      name: 'VoxPopuli',
      value: 'voxpopuli',
      api: 'https://vox.nanos.cc/api',
      ws: 'wss://vox.nanos.cc/websocket',
      auth: null,
      shouldRandom: true,
    },
    {
      name: 'PowerNode',
      value: 'powernode',
      api: 'https://proxy.powernode.cc/proxy',
      ws: 'wss://ws.powernode.cc',
      auth: null,
      shouldRandom: true,
    },
    {
      name: 'Rainstorm City',
      value: 'rainstorm',
      api: 'https://rainstorm.city/api',
      ws: 'wss://rainstorm.city/websocket',
      auth: null,
      shouldRandom: true,
    },
    {
      name: 'Nanex.cc',
      value: 'nanex',
      api: 'https://api.nanex.cc',
      ws: null,
      auth: null,
      shouldRandom: false,
    },
    {
      name: 'NanoCrawler',
      value: 'nanocrawler',
      api: 'https://vault.nanocrawler.cc/api/node-api',
      ws: null,
      auth: null,
      shouldRandom: false,
    },
  ],
  representativeAccounts: [
    'xdg_1mz6am1zez5y8u87s7pkddagkag4xtub7bktn8wm6o5taekwypfww4p6frby', // XDG 1
  ],
  defaultRepresentatives: [
    {
      id: 'xdg_1mz6am1zez5y8u87s7pkddagkag4xtub7bktn8wm6o5taekwypfww4p6frby',
      name: 'XDG #1',
      warn: true,
    },
  ],
  donationAddress: 'xdg_1mz6am1zez5y8u87s7pkddagkag4xtub7bktn8wm6o5taekwypfww4p6frby',
};
