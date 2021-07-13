import { PoundOutlined as BasePoundOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PoundOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePoundOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pound-outlined text-xl"
            role="img"
            aria-label="pound-outlined"
            innerHTML={svgHTMLString}
        />
    );
};