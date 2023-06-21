import AlgebraConfig from "algebra.config"

type AddressMap = { [chainId: number]: string }

export const ChainId = {
    BNB: 56,
    PULSE: 369
}

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].FACTORY_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].FACTORY_ADDRESS
}

export const POOL_DEPLOYER_ADDRESS: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].POOL_DEPLOYER_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].POOL_DEPLOYER_ADDRESS
}

export const QUOTER_ADDRESSES: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].QUOTER_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].QUOTER_ADDRESS,
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].SWAP_ROUTER_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].SWAP_ROUTER_ADDRESS,
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
}

export const MULTICALL_ADDRESS: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].MULTICALL_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].MULTICALL_ADDRESS,
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].MIGRATOR_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].MIGRATOR_ADDRESS,
}

export const FINITE_FARMING: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].LIMIT_FARMING_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].LIMIT_FARMING_ADDRESS,
}

export const INFINITE_FARMING_ADDRESS: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].ETERNAL_FARMING_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].ETERNAL_FARMING_ADDRESS
}

export const FARMING_CENTER: AddressMap = {
    [ChainId.BNB]: AlgebraConfig.V3_CONTRACTS[ChainId.BNB].FARMING_CENTER_ADDRESS,
    [ChainId.PULSE]: AlgebraConfig.V3_CONTRACTS[ChainId.PULSE].FARMING_CENTER_ADDRESS,
}

export const V2_FACTORY_ADDRESSES: AddressMap = {
    [ChainId.BNB]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
    [ChainId.PULSE]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
    [ChainId.BNB]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    [ChainId.PULSE]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
}
