import { MediumWorkmarkOutlined as BaseMediumWorkmarkOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MediumWorkmarkOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMediumWorkmarkOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-medium-workmark-outlined text-xl"
            role="img"
            aria-label="medium-workmark-outlined"
            innerHTML={svgHTMLString}
        />
    );
};