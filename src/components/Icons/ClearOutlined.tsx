import { ClearOutlined as BaseClearOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ClearOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseClearOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-clear-outlined text-xl"
            role="img"
            aria-label="clear-outlined"
            innerHTML={svgHTMLString}
        />
    );
};