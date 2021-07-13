import { WalletFilled as BaseWalletFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WalletFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWalletFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-wallet-filled text-xl"
            role="img"
            aria-label="wallet-filled"
            innerHTML={svgHTMLString}
        />
    );
};