import { UpOutlined as BaseUpOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UpOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUpOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-up-outlined text-xl"
            role="img"
            aria-label="up-outlined"
            innerHTML={svgHTMLString}
        />
    );
};