import { MediumOutlined as BaseMediumOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MediumOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMediumOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-medium-outlined text-xl"
            role="img"
            aria-label="medium-outlined"
            innerHTML={svgHTMLString}
        />
    );
};