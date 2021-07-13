import { RotateLeftOutlined as BaseRotateLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RotateLeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRotateLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rotate-left-outlined text-xl"
            role="img"
            aria-label="rotate-left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};