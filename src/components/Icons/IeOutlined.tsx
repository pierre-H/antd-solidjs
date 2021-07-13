import { IeOutlined as BaseIeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const IeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseIeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ie-outlined text-xl"
            role="img"
            aria-label="ie-outlined"
            innerHTML={svgHTMLString}
        />
    );
};