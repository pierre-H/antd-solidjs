import { DoubleRightOutlined as BaseDoubleRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DoubleRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDoubleRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-double-right-outlined text-xl"
            role="img"
            aria-label="double-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};