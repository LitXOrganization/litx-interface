import AlgebraConfig from "algebra.config"

export async function fetchEternalFarmAPR(chainId: number) {

    const apiURL = AlgebraConfig.API[chainId].eternalFarmsAPR

    try {
        return await fetch(apiURL).then(v => v.json())

    } catch (error: any) {
        return {}
    }

}

export async function fetchLimitFarmAPR(chainId: number) {

    const apiURL = AlgebraConfig.API[chainId].limitFarmsAPR

    try {
        return await fetch(apiURL).then(v => v.json())

    } catch (error: any) {
        return {}
    }

}

export async function fetchLimitFarmTVL(chainId: number) {

    const apiURL = AlgebraConfig.API[chainId].limitFarmsTVL

    try {
        return await fetch(apiURL).then(v => v.json())

    } catch (error: any) {
        return {}
    }

}

export async function fetchEternalFarmTVL(chainId: number) {

    const apiURL = AlgebraConfig.API[chainId].eternalFarmsTVL

    try {
        return await fetch(apiURL).then(v => v.json())

    } catch (error: any) {
        return {}
    }

}

export async function fetchPoolsAPR(chainId: number) {
    const apiURL = AlgebraConfig.API[chainId].poolsAPR

    try {
        return await fetch(apiURL).then(v => v.json())

    } catch (error: any) {
        return {}
    }

}
