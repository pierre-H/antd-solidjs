import { CloseCircleOutlined as BaseCloseCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloseCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloseCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-close-circle-outlined text-xl"
            role="img"
            aria-label="close-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};