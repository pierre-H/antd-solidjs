import { HddOutlined as BaseHddOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HddOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHddOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-hdd-outlined text-xl"
            role="img"
            aria-label="hdd-outlined"
            innerHTML={svgHTMLString}
        />
    );
};