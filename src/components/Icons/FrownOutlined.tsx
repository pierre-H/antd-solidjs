import { FrownOutlined as BaseFrownOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FrownOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFrownOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-frown-outlined text-xl"
            role="img"
            aria-label="frown-outlined"
            innerHTML={svgHTMLString}
        />
    );
};