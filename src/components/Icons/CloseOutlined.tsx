import { CloseOutlined as BaseCloseOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloseOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloseOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-close-outlined text-xl"
            role="img"
            aria-label="close-outlined"
            innerHTML={svgHTMLString}
        />
    );
};