import { RiseOutlined as BaseRiseOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RiseOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRiseOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rise-outlined text-xl"
            role="img"
            aria-label="rise-outlined"
            innerHTML={svgHTMLString}
        />
    );
};