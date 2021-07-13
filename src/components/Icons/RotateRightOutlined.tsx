import { RotateRightOutlined as BaseRotateRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RotateRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRotateRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rotate-right-outlined text-xl"
            role="img"
            aria-label="rotate-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};