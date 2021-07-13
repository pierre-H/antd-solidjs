import { DownOutlined as BaseDownOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DownOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDownOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-down-outlined text-xl"
            role="img"
            aria-label="down-outlined"
            innerHTML={svgHTMLString}
        />
    );
};