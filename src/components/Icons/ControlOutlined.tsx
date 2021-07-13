import { ControlOutlined as BaseControlOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ControlOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseControlOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-control-outlined text-xl"
            role="img"
            aria-label="control-outlined"
            innerHTML={svgHTMLString}
        />
    );
};