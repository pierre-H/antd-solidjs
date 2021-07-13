import { LinkedinOutlined as BaseLinkedinOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LinkedinOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLinkedinOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-linkedin-outlined text-xl"
            role="img"
            aria-label="linkedin-outlined"
            innerHTML={svgHTMLString}
        />
    );
};