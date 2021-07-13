import { RightOutlined as BaseRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-right-outlined text-xl"
            role="img"
            aria-label="right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};