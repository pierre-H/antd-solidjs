import { GoogleOutlined as BaseGoogleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GoogleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGoogleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-google-outlined text-xl"
            role="img"
            aria-label="google-outlined"
            innerHTML={svgHTMLString}
        />
    );
};