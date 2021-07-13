import { AndroidOutlined as BaseAndroidOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AndroidOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAndroidOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-android-outlined text-xl"
            role="img"
            aria-label="android-outlined"
            innerHTML={svgHTMLString}
        />
    );
};