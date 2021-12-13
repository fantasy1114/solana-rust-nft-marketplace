import { PublicKey } from '@solana/web3.js';
export const CANDY_MACHINE = 'candy_machine';
export const MAX_NAME_LENGTH = 32;
export const MAX_URI_LENGTH = 200;
export const MAX_SYMBOL_LENGTH = 10;
export const MAX_CREATOR_LEN = 32 + 1 + 1;
export const ARWEAVE_PAYMENT_WALLET = new PublicKey(
  'DAgy_hmIpqm_j1mtIofxP723-98S-9qmZbTFoAWPNnY',
);
export const CANDY_MACHINE_PROGRAM_ID = new PublicKey(
  '4oFadyVnBu9hbTGcKWvq354FbBdDiRURqvEBuKkAYdbX',
);
export const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  '6uYTFLcNeGfnGXxpLz6jegJYkqbSgf4dTQ8MzANzZVrk',
);
export const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  'EuNvNkxadmdbJNwS4G41tYmkMPcfCDueDueEKWxscQez',
);
export const TOKEN_PROGRAM_ID = new PublicKey(
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
);
export const FAIR_LAUNCH_PROGRAM_ID = new PublicKey(
  'DpYitSMsJgVGVkYsr7YPXrtYvEZgQPfMsu7K7PcF6iox',
);
export const CONFIG_ARRAY_START =
  32 + // authority
  4 +
  6 + // uuid + u32 len
  4 +
  10 + // u32 len + symbol
  2 + // seller fee basis points
  1 +
  4 +
  5 * 34 + // optional + u32 len + actual vec
  8 + //max supply
  1 + //is mutable
  1 + // retain authority
  4; // max number of lines;
export const CONFIG_LINE_SIZE = 4 + 32 + 4 + 200;

export const CACHE_PATH = './.cache';

export const DEFAULT_TIMEOUT = 15000;

export const EXTENSION_PNG = '.png';
export const EXTENSION_JSON = '.json';
