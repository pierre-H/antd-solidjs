import { LeftCircleOutlined as BaseLeftCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LeftCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLeftCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-left-circle-outlined text-xl"
            role="img"
            aria-label="left-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};