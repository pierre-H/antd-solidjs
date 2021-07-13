import { SwapRightOutlined as BaseSwapRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SwapRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSwapRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-swap-right-outlined text-xl"
            role="img"
            aria-label="swap-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};