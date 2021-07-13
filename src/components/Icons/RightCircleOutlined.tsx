import { RightCircleOutlined as BaseRightCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RightCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRightCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-right-circle-outlined text-xl"
            role="img"
            aria-label="right-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};