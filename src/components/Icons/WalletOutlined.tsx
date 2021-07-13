import { WalletOutlined as BaseWalletOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WalletOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWalletOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-wallet-outlined text-xl"
            role="img"
            aria-label="wallet-outlined"
            innerHTML={svgHTMLString}
        />
    );
};