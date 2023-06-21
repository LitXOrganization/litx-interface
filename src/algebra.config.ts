export default {

    CHAIN_PARAMS: {
        [56]: {
            chainId: 56,
            chainIdHex: "0x38",
            chainName: "BNB Chain",
            nativeCurrency: { name: 'Wrapped BNB', symbol: 'WBNB', decimals: 18, logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7192.png' },
            wrappedNativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18, address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7192.png' },
            rpcURL: "https://bsc-dataseed.binance.org/",
            blockExplorerURL: "https://bscscan.com",
        },
        [369]: {
            chainId: 369,
            chainIdHex: "0x171",
            chainName: "PulseChain",
            nativeCurrency: { name: 'Wrapped PLS', symbol: 'WPLS', decimals: 18, logo: 'https://pulsechain.com/img/favicon128.png' },
            wrappedNativeCurrency: { name: "PLS", symbol: "PLS", decimals: 18, address: "0xa1077a294dde1b09bb078844df40758a5d0f9a27", logo: 'https://pulsechain.com/img/favicon128.png' },
            rpcURL: "https://rpc.pulsechain.com/",
            blockExplorerURL: "https://scan.pulsechain.com",
        }
    },

    // Token addresses should be in lowercase
    DEFAULT_TOKEN_LIST: {
        [56]:
        {
            // Tokens, which would be displayed on the top of Token Selector Modal
            defaultTokens: {
                ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]: { name: "Wrapped BNB", symbol: "WBNB", decimals: 18 },
                ["0xe9e7cea3dedca5984780bafc599bd69add087d56"]: { name: "Binance USD", symbol: "BUSD", decimals: 18 },
                ["0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"]: { name: "XEN Crypto", symbol: "XEN", decimals: 18 },
                ["0x55d398326f99059ff775485246999027b3197955"]: { name: "USDT", symbol: "USDT", decimals: 18 },
                ["0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"]: { name: "USDC", symbol: "USDC", decimals: 18 },
                ["0x20f663cea80face82acdfa3aae6862d246ce0333"]: { name: "Drip Network", symbol: "DRIP", decimals: 18 },
            },
            // Tokens, which would be used for creating multihop routes
            tokensForMultihop: {
                ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]: { name: "Wrapped BNB", symbol: "WBNB", decimals: 18 },
                ["0xe9e7cea3dedca5984780bafc599bd69add087d56"]: { name: "Binance USD", symbol: "BUSD", decimals: 18 },
                ["0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"]: { name: "USDC", symbol: "USDC", decimals: 18 },
                ["0x55d398326f99059ff775485246999027b3197955"]: { name: "USDT", symbol: "USDT", decimals: 18 },
            },
            tokensLogos: {
                ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7192.png',
                ["0xe9e7cea3dedca5984780bafc599bd69add087d56"]: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
                ["0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"]: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
                ["0x20f663cea80face82acdfa3aae6862d246ce0333"]: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11093.png',
                ["0x55d398326f99059ff775485246999027b3197955"]: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
                ["0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"]: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22118.png'
            },
            stableTokens: {
                ["0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"]: { name: "USDC", symbol: "USDC", decimals: 18 },
                ["0x55d398326f99059ff775485246999027b3197955"]: { name: "USDT", symbol: "USDT", decimals: 18 },
                ["0xe9e7cea3dedca5984780bafc599bd69add087d56"]: { name: "Binance USD", symbol: "BUSD", decimals: 18 },
            },
            stableTokenForUSDPrice: { address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", name: "USDC", symbol: "USDC", decimals: 18 },
            // Real tokens and their possible fake names. Used for token launch safety
            filterForScamTokens: {
                tokensForCheck: {
                    ["DD"]: "0x582daef1f36d6009f64b74519cfd612a8467be18",
                    ["DC"]: "0x7b4328c127b85369d9f82ca0503b000d09cf9180"
                },
                possibleFakeNames: [
                    {
                        names: ['Doge Dragon', 'DogeDragon', 'Dragon Doge', 'DragonDoge'],
                        realAddress: "0x582daef1f36d6009f64b74519cfd612a8467be18"
                    },
                    {
                        names: ['Dogechain Token', 'DogeChain Token', 'Dogechain', 'DogeChain'],
                        realAddresses: "0x7b4328c127b85369d9f82ca0503b000d09cf9180"
                    }
                ]
            }
        },
        [369]: {
            defaultTokens: {
                ["0xa1077a294dde1b09bb078844df40758a5d0f9a27"]: { name: "Wrapped PLS", symbol: "WPLS", decimals: 18 },
                ["0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07"]: { name: "USD Coin from Ethereum", symbol: "USDC", decimals: 6 },
            },
            tokensForMultihop: {
                ["0xa1077a294dde1b09bb078844df40758a5d0f9a27"]: { name: "Wrapped PLS", symbol: "WPLS", decimals: 18 },
                ["0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07"]: { name: "USD Coin from Ethereum", symbol: "USDC", decimals: 6 },
            },
            tokensLogos: {
                ["0xa1077a294dde1b09bb078844df40758a5d0f9a27"]: 'https://pulsechain.com/img/favicon128.png',
                ["0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07"]: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
            },
            stableTokens: {
                ["0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07"]: { name: "USD Coin from Ethereum", symbol: "USDC", decimals: 6 },
            },
            stableTokenForUSDPrice: { address: "0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07", name: "USD Coin from Ethereum", symbol: "USDC", decimals: 6 },
            filterForScamTokens: {
                tokensForCheck: {
                    ["DD"]: "0x582daef1f36d6009f64b74519cfd612a8467be18",
                    ["DC"]: "0x7b4328c127b85369d9f82ca0503b000d09cf9180"
                },
                possibleFakeNames: [
                    {
                        names: ['Doge Dragon', 'DogeDragon', 'Dragon Doge', 'DragonDoge'],
                        realAddress: "0x582daef1f36d6009f64b74519cfd612a8467be18"
                    },
                    {
                        names: ['Dogechain Token', 'DogeChain Token', 'Dogechain', 'DogeChain'],
                        realAddresses: "0x7b4328c127b85369d9f82ca0503b000d09cf9180"
                    }
                ]
            }
        }
    },

    V3_CONTRACTS: {
        [56]: {
            POOL_DEPLOYER_ADDRESS: "0x8056C4A71B4A281881DbC1c3531227B27B954f2E",
            FACTORY_ADDRESS: "0xbBC7F5605c9CB341D9C41E46Ae6cEb30511BDfcF",
            QUOTER_ADDRESS: "0x7d6A6969cAD95372bf9067B15FefD7b9f466B99e",
            SWAP_ROUTER_ADDRESS: "0xa239202842957Bd9D59189184D54e8992270753d",
            NONFUNGIBLE_POSITION_MANAGER_ADDRESS: "0x97D39f7BD3659ec149a6833b478dABa929C4d4b3",
            MULTICALL_ADDRESS: "0x23F8a7E04E05d7d5C5Be5e46941668e59a3ab8D8",
            MIGRATOR_ADDRESS: "0x60A5D6AbDc43bbE157B437CBCAb414a3db1a9ef5",
            FARMING_CENTER_ADDRESS: "0x2Fc2355e92819dc5E925DBf9A036A14b4C7D6092",
            LIMIT_FARMING_ADDRESS: "0x3A49c7aa647b635E2f97C2FEb20f830e852Fd3f7",
            ETERNAL_FARMING_ADDRESS: "0x5EB0AE7477960aA59Fdd8cD1299866E7322587a1",
            POOL_INIT_CODE_HASH: "0x6ec6c9c8091d160c0aa74b2b14ba9c1717e95093bd3ac085cee99a49aab294a4"
        },
        [369]: {
            POOL_DEPLOYER_ADDRESS: "0xaB52548fd4e7546116Dc664431004b1ed703d615",
            FACTORY_ADDRESS: "0x24398b6ea5434339934D999E431807B1C157b4Fd",
            QUOTER_ADDRESS: "0x96008faF3D5c5361900aF0290156f4eDaC443336",
            SWAP_ROUTER_ADDRESS: "0x63e82cf4E45aFa17F1869c5d35CC7518Baf8bdB0",
            NONFUNGIBLE_POSITION_MANAGER_ADDRESS: "0x233ddC67C7ce558d05CAeD93aF073a2829B6625e",
            MULTICALL_ADDRESS: "0xF6170A5053543D467C0c5FA280FC2302068a3347",
            MIGRATOR_ADDRESS: "0xA6385C54F175215491cBc9Ef5fc52F01C300B768",
            FARMING_CENTER_ADDRESS: "0x97D39f7BD3659ec149a6833b478dABa929C4d4b3",
            LIMIT_FARMING_ADDRESS: "0x68F9451501909C4d464b432dCb5B7D1e25B37b3e",
            ETERNAL_FARMING_ADDRESS: "0x1F59aCd715CFd13dE06537bBb15B07919A68D1e4",
            POOL_INIT_CODE_HASH: "0x6ec6c9c8091d160c0aa74b2b14ba9c1717e95093bd3ac085cee99a49aab294a4"
        }
    },

    SUBGRAPH: {
        [56]: {
            infoURL: "https://api.thegraph.com/subgraphs/name/iliaazhel/litx-analytics",
            farmingURL: "https://api.thegraph.com/subgraphs/name/iliaazhel/litx-farming",
            blocklyticsURL: "https://api.thegraph.com/subgraphs/name/iliaazhel/bsc-blocks"
        },
        [369]: {
            infoURL: "https://api.algebra.finance/pulse-graph/subgraphs/name/cryptoalgebra/litx-analytics",
            farmingURL: "https://api.algebra.finance/pulse-graph/subgraphs/name/cryptoalgebra/litx-farmings",
            blocklyticsURL: "https://api.algebra.finance/pulse-graph/subgraphs/name/cryptoalgebra/pulse-blocks"
        }
    },

    API: {
        [56]: {
            eternalFarmsAPR: "https://api.algebra.finance/api/APR/eternalFarmings/?network=binance-litx",
            limitFarmsAPR: "https://api.algebra.finance/api/APR/limitFarmings",
            eternalFarmsTVL: "https://api.algebra.finance/api/TVL/eternalFarmings/?network=binance-litx",
            limitFarmsTVL: "https://api.algebra.finance/api/TVL/limitFarmings",
            poolsAPR: "https://api.algebra.finance/api/APR/pools/?network=binance-litx"
        },
        [369]: {
            eternalFarmsAPR: "https://api.algebra.finance/api/APR/eternalFarmings/?network=pulse-litx",
            limitFarmsAPR: "https://api.algebra.finance/api/APR/limitFarmings/",
            eternalFarmsTVL: "https://api.algebra.finance/api/TVL/eternalFarmings/?network=pulse-litx",
            limitFarmsTVL: "https://api.algebra.finance/api/TVL/limitFarmings/",
            poolsAPR: "https://api.algebra.finance/api/APR/pools/?network=pulse-litx"
        }
    },

    MISC: {
        [56]: {
            title: "LitX BNB Chain",
            description: "Swap and provide liquidity on LitX BNB",
            appURL: ""
        },
        [369]: {
            title: 'LitX PulseChain',
            description: "Swap and provide liquidity on LitX Pulse",
            appURL: ""
        }
    },
}
