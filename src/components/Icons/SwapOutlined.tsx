import { SwapOutlined as BaseSwapOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SwapOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSwapOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-swap-outlined text-xl"
            role="img"
            aria-label="swap-outlined"
            innerHTML={svgHTMLString}
        />
    );
};