import { useCallback, useState } from "react";
import { CloseIcon, TYPE } from "theme";
import Card from "components/Card";
import { AutoColumn } from "components/Column";
import { AutoRow, RowBetween, RowFixed } from "components/Row";
import { AlertTriangle, ArrowLeft } from "react-feather";
import useTheme from "hooks/useTheme";
import { transparentize } from "polished";
import { ButtonPrimary } from "components/Button";
import { SectionBreak } from "../swap/styled";
import { ExternalLink } from "../../theme";
import ListLogo from "components/ListLogo";
import { Checkbox, PaddedColumn, TextDot, Wrapper } from "./styled";
import { TokenList } from "@uniswap/token-lists";
import { useAppDispatch } from "state/hooks";
import { useFetchListCallback } from "hooks/useFetchListCallback";
import { enableList, removeList } from "state/lists/actions";
import { CurrencyModalView } from "./CurrencySearchModal";
import { useAllLists } from "state/lists/hooks";
import { Trans } from "@lingui/macro";

interface ImportProps {
    listURL: string;
    list: TokenList;
    onDismiss: () => void;
    setModalView: (view: CurrencyModalView) => void;
}

export function ImportList({ listURL, list, setModalView, onDismiss }: ImportProps) {
    const theme = useTheme();
    const dispatch = useAppDispatch();

    // user must accept
    const [confirmed, setConfirmed] = useState(false);

    const lists = useAllLists();
    const fetchList = useFetchListCallback();

    // monitor is list is loading
    const adding = Boolean(lists[listURL]?.loadingRequestId);
    const [addError, setAddError] = useState<string | null>(null);

    const handleAddList = useCallback(() => {
        if (adding) return;
        setAddError(null);
        fetchList(listURL)
            .then(() => {
                // turn list on
                dispatch(enableList(listURL));
                // go back to lists
                setModalView(CurrencyModalView.manage);
            })
            .catch((error) => {
                setAddError(error.message);
                dispatch(removeList(listURL));
            });
    }, [adding, dispatch, fetchList, listURL, setModalView]);

    return (
        <Wrapper>
            <PaddedColumn gap="14px" style={{ width: "100%", flex: "1 1" }}>
                <RowBetween>
                    <ArrowLeft style={{ cursor: "pointer" }} onClick={() => setModalView(CurrencyModalView.manage)} />
                    <TYPE.mediumHeader>
                        <Trans>Import List</Trans>
                    </TYPE.mediumHeader>
                    <CloseIcon onClick={onDismiss} />
                </RowBetween>
            </PaddedColumn>
            <SectionBreak />
            <PaddedColumn gap="md">
                <AutoColumn gap="md">
                    <Card backgroundColor={"var(--bg2)"} padding="12px 20px">
                        <RowBetween>
                            <RowFixed>
                                {list.logoURI && <ListLogo logoURI={list.logoURI} size="40px" />}
                                <AutoColumn gap="sm" style={{ marginLeft: "20px" }}>
                                    <RowFixed>
                                        <TYPE.body fontWeight={600} mr="6px">
                                            {list.name}
                                        </TYPE.body>
                                        <TextDot />
                                        <TYPE.main fontSize={"16px"} ml="6px">
                                            <Trans>{list.tokens.length} tokens</Trans>
                                        </TYPE.main>
                                    </RowFixed>
                                    <ExternalLink href={`https://tokenlists.org/token-list?url=${listURL}`}>
                                        <TYPE.main fontSize={"12px"} color={"var(--blue1)"}>
                                            {listURL}
                                        </TYPE.main>
                                    </ExternalLink>
                                </AutoColumn>
                            </RowFixed>
                        </RowBetween>
                    </Card>
                    <Card style={{ backgroundColor: transparentize(0.8, "var(--red1)") }}>
                        <AutoColumn
                            justify="center"
                            style={{
                                textAlign: "center",
                                gap: "16px",
                                marginBottom: "12px",
                            }}
                        >
                            <AlertTriangle stroke={"var(--red1)"} size={32} />
                            <TYPE.body fontWeight={500} fontSize={20} color={"var(--red1)"}>
                                <Trans>Import at your own risk</Trans>
                            </TYPE.body>
                        </AutoColumn>

                        <AutoColumn style={{ textAlign: "center", gap: "16px", marginBottom: "12px" }}>
                            <TYPE.body fontWeight={500} color={"var(--red1)"}>
                                <Trans>
                                    By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists
                                    that claim to represent projects that do not have one.
                                </Trans>
                            </TYPE.body>
                            <TYPE.body fontWeight={600} color={"var(--red1)"}>
                                <Trans>If you purchase a token from this list, you may not be able to sell it back.</Trans>
                            </TYPE.body>
                        </AutoColumn>
                        <AutoRow justify="center" style={{ cursor: "pointer" }} onClick={() => setConfirmed(!confirmed)}>
                            <Checkbox name="confirmed" type="checkbox" checked={confirmed} onChange={() => setConfirmed(!confirmed)} />
                            <TYPE.body ml="10px" fontSize="16px" color={"var(--red1)"} fontWeight={500}>
                                <Trans>I understand</Trans>
                            </TYPE.body>
                        </AutoRow>
                    </Card>
                    <ButtonPrimary disabled={!confirmed} altDisabledStyle={true} $borderRadius="20px" padding="10px 1rem" onClick={handleAddList}>
                        <Trans>Import</Trans>
                    </ButtonPrimary>
                    {addError ? (
                        <TYPE.error title={addError} style={{ textOverflow: "ellipsis", overflow: "hidden" }} error>
                            {addError}
                        </TYPE.error>
                    ) : null}
                </AutoColumn>
            </PaddedColumn>
        </Wrapper>
    );
}
