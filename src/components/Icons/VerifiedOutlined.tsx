import { VerifiedOutlined as BaseVerifiedOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VerifiedOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVerifiedOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-verified-outlined text-xl"
            role="img"
            aria-label="verified-outlined"
            innerHTML={svgHTMLString}
        />
    );
};