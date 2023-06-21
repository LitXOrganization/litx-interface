import { useCallback } from "react";
import AlgebraConfig from "algebra.config";
import { useActiveWeb3React } from "hooks/web3";
import { ChainId } from "constants/addresses";
import { addPolygonNetwork } from "components/Web3Status/Web3StatusInner";

import "./index.scss";

export default function HeaderMenu() {
    const { chainId } = useActiveWeb3React();

    const handleSelect = useCallback((item: number) => addPolygonNetwork(item), []);

    return (
        <div className="header-menu br-8">
            <ul className="header-menu__list">
                <li className={`header-menu__list-item ${chainId === ChainId.BNB ? "active" : ""} `} onClick={() => handleSelect(ChainId.BNB)}>
                    <a rel={"noreferrer noopener"} target={"_blank"} className="ph-1 pv-1 mxs_pv-1 ms_pv-1 w-100 f f-jb">
                        <span className="header-menu__list-item__title f">
                            <span className={"mr-1"}>
                                <img width={18} src={AlgebraConfig.CHAIN_PARAMS[ChainId.BNB].nativeCurrency.logo} />
                            </span>
                            <span>{"BNB Chain"}</span>
                        </span>
                    </a>
                </li>
                <li className={`header-menu__list-item ${chainId === ChainId.PULSE ? "active" : ""}`} onClick={() => handleSelect(ChainId.PULSE)}>
                    <a rel={"noreferrer noopener"} target={"_blank"} className="ph-1 pv-1 mxs_pv-1 ms_pv-1 w-100 f f-jb">
                        <span className="header-menu__list-item__title f">
                            <span className={"mr-1"}>
                                <img width={18} src={AlgebraConfig.CHAIN_PARAMS[ChainId.PULSE].nativeCurrency.logo} />
                            </span>
                            <span>{"PulseChain"}</span>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
