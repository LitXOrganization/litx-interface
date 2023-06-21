import { useOnClickOutside } from "hooks/useOnClickOutside";
import { useActiveWeb3React } from "hooks/web3";
import { useEffect, useRef, useState } from "react";
import { ApplicationModal } from "state/application/actions";
import { useModalOpen, useToggleModal } from "state/application/hooks";
import { switchToNetwork } from "utils/switchToNetwork";
import { CHAIN_INFO } from "../../constants/chains";

import AlgebraConfig from "algebra.config";

export default function NetworkCard() {
    const { chainId, library } = useActiveWeb3React();

    const node = useRef<HTMLDivElement>(null);
    const open = useModalOpen(ApplicationModal.ARBITRUM_OPTIONS);
    const toggle = useToggleModal(ApplicationModal.ARBITRUM_OPTIONS);
    useOnClickOutside(node, open ? toggle : undefined);

    const info = chainId ? CHAIN_INFO[chainId] : undefined;

    console.log(chainId, info, library);

    if (!chainId || !info || !library) {
        return null;
    }

    if (chainId) {
        return (
            <div className="f">
                <img src={AlgebraConfig.CHAIN_PARAMS[chainId].wrappedNativeCurrency.logo} width="20" />
                <div className="ml-05" style={{ whiteSpace: "nowrap" }} title={info.label}>
                    {info.label}
                </div>
            </div>
        );
    }

    return <div title={info.label}>{info.label}</div>;
}
