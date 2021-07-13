import { GooglePlusOutlined as BaseGooglePlusOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GooglePlusOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGooglePlusOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-google-plus-outlined text-xl"
            role="img"
            aria-label="google-plus-outlined"
            innerHTML={svgHTMLString}
        />
    );
};