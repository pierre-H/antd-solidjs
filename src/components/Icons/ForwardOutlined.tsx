import { ForwardOutlined as BaseForwardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ForwardOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseForwardOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-forward-outlined text-xl"
            role="img"
            aria-label="forward-outlined"
            innerHTML={svgHTMLString}
        />
    );
};