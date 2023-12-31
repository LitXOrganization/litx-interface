import { AbstractConnector } from '@web3-react/abstract-connector'
import INJECTED_ICON_URL from '../assets/images/arrow-right.svg'
import METAMASK_ICON_URL from '../assets/svg/metamask-logo.svg'
import WALLET_CONNECT_URL from '../assets/images/walletConnectionIcon.svg'
import { injected, walletconnector } from '../connectors'

interface WalletInfo {
    connector?: AbstractConnector
    name: string
    iconURL: string
    description: string
    href: string | null
    color: string
    primary?: true
    mobile?: true
    mobileOnly?: true
    chromeOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
    INJECTED: {
        connector: injected,
        name: 'Injected',
        iconURL: INJECTED_ICON_URL,
        description: 'Injected web3 provider.',
        href: null,
        color: '#010101',
        primary: true
    },
    METAMASK: {
        connector: injected,
        name: 'MetaMask',
        iconURL: METAMASK_ICON_URL,
        description: '',
        href: null,
        color: '#E8831D'
    },
    WALLET_CONNECT: {
        connector: walletconnector,
        name: "Wallet Connect",
        iconURL: WALLET_CONNECT_URL,
        description: "Universal wallet protocol.",
        href: null,
        color: '#2797FFFF',
        mobile: true
    },
}
