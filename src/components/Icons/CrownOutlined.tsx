import { CrownOutlined as BaseCrownOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CrownOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCrownOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-crown-outlined text-xl"
            role="img"
            aria-label="crown-outlined"
            innerHTML={svgHTMLString}
        />
    );
};