import { DribbbleOutlined as BaseDribbbleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DribbbleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDribbbleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dribbble-outlined text-xl"
            role="img"
            aria-label="dribbble-outlined"
            innerHTML={svgHTMLString}
        />
    );
};