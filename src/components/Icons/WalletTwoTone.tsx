import { WalletTwoTone as BaseWalletTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WalletTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWalletTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-wallet-two-tone text-xl"
            role="img"
            aria-label="wallet-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};