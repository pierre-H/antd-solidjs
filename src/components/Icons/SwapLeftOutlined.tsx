import { SwapLeftOutlined as BaseSwapLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SwapLeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSwapLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-swap-left-outlined text-xl"
            role="img"
            aria-label="swap-left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};