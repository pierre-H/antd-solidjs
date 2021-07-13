import { LeftOutlined as BaseLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-left-outlined text-xl"
            role="img"
            aria-label="left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};