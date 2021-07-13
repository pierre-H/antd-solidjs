import { DownCircleOutlined as BaseDownCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DownCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDownCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-down-circle-outlined text-xl"
            role="img"
            aria-label="down-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};