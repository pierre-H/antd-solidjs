import { BackwardOutlined as BaseBackwardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BackwardOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBackwardOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-backward-outlined text-xl"
            role="img"
            aria-label="backward-outlined"
            innerHTML={svgHTMLString}
        />
    );
};