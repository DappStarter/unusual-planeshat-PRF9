require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth script method hover clog sure senior'; 
let testAccounts = [
"0xace6b59c9285841b260bc0d63c374a07308992fa84a3b88e39e4b830fe46cd21",
"0xfb8f86b0c0d6f63f8763e0f1f999e0e4341d09c17e9ef9f7cab1ca5477f9e55c",
"0x39ddd1e0df8db9a033185c96cd85802179bc5ef25a5bbbd1513833eef0a38798",
"0x4e57f90d0bf108d72e8f578419be9d8bd5561ae5518a6239df285584b0ce5b05",
"0x746519d75cc0872c09eb99b9df17f86c5ce455cd789e654167008075703a04b7",
"0x7ac51ac75a1f54c018ee1964281162e0670d341f6b488c4117cd7eb87cf422c3",
"0xad146ab9753acd446a7c0b7cf529d94e27b7bb23aeebce794d47eba91609a03e",
"0x668271b7f8a6b0d44ce55af8b576bcbb2f0cc6a1b5d9bfcaae012d043b98a8f7",
"0xfc92b72f7e66f8ce15b0c939b70cd285108b77ca92e5c08843cabed4e18a0401",
"0x5c12fbbd7bb45dd0e53f4c093d2e9e13e4c4bdb4be96b21fe6ba63bf0cd9fa2d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

