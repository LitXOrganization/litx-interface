import { createReducer, nanoid } from '@reduxjs/toolkit'
import { addPopup, ApplicationModal, PopupContent, removePopup, setOpenModal, updateBlockNumber, updateChainId, updateGasPrice } from './actions'

type PopupList = Array<{ key: string; show: boolean; content: PopupContent; removeAfterMs: number | null }>

export interface ApplicationState {
    // used by RTK-Query to build dynamic subgraph urls
    readonly chainId: number | null
    readonly blockNumber: { readonly [chainId: number]: number }
    readonly gasPrice: { fetched: number | null, override: boolean }
    readonly popupList: PopupList
    readonly openModal: ApplicationModal | null
}

const initialState: ApplicationState = {
    chainId: null,
    blockNumber: {},
    gasPrice: { fetched: 0.1, override: true },
    popupList: [],
    openModal: null
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(updateChainId, (state, action) => {
            const { chainId } = action.payload
            state.chainId = chainId
        })
        .addCase(updateBlockNumber, (state, action) => {
            const { chainId, blockNumber } = action.payload
            if (typeof state.blockNumber[chainId] !== 'number') {
                state.blockNumber[chainId] = blockNumber
            } else {
                state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId])
            }
        })
        .addCase(updateGasPrice, (state, action) => {
            state.gasPrice = action.payload
        })
        .addCase(setOpenModal, (state, action) => {
            state.openModal = action.payload
        })
        .addCase(addPopup, (state, { payload: { content, key, removeAfterMs = 25000 } }) => {
            state.popupList = (key ? state.popupList.filter((popup) => popup.key !== key) : state.popupList).concat([
                {
                    key: key || nanoid(),
                    show: true,
                    content,
                    removeAfterMs
                }
            ])
        })
        .addCase(removePopup, (state, { payload: { key } }) => {
            state.popupList.forEach((p) => {
                if (p.key === key) {
                    p.show = false
                }
            })
        })
)
