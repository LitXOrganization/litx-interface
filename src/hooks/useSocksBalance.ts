// technically a 721, not an ERC20, but suffices for our purposes

export function useHasSocks(): boolean | undefined {
    // const { account, chainId } = useActiveWeb3React()

    // const balance = useTokenBalance(account ?? undefined, chainId === SupportedChainId.MAINNET ? SOCKS : undefined)

    // return useMemo(() => Boolean(balance?.greaterThan(0)), [balance])
    return false
}
