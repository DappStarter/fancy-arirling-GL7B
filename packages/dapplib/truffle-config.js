require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stock rice place eternal harvest industry slot ghost'; 
let testAccounts = [
"0x2c83df94baa886c8710b9b9362ec9f2918f2ef6af618b7f9ff60a8176e0e9a64",
"0x4982dc672c9ade42983a33b3f5e35696beb837589f36bd9dc480ad6934eccbd9",
"0x35333cc8f67766e0c6c93898a208e23667750e0102cb179e43aa8c2161ff8b49",
"0x4ba96e10b2ef49798590727a3e692e1496f1140c425b5f9094b659a143174b46",
"0x799382d5af38b2c1d62c74fb8021fa56f25877fbd5422e889534a14159ba62c2",
"0xf9be14445f03ef414e5d7f730769b1997153a93ec88f549b33c56344896e5b35",
"0x8adfed30bcb6140c5a2bd4bf2e1be68ca96bd1a05e2cda20df074419ab22dc8c",
"0x78ef266c623cd7d8218346415cc0c531771b49964ee7a62f9a17c11c1cef9e3f",
"0x1e3e2e8120736ad2b27b5680776c748cd7c476f73ef279b1f0d40dbcaadcacc9",
"0xb8750c4281cc103752ffadacd669532e48b3e9f2d40f4b6e959d672fe2ea83b9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


