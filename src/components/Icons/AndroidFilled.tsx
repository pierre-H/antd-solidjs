import { AndroidFilled as BaseAndroidFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AndroidFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAndroidFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-android-filled text-xl"
            role="img"
            aria-label="android-filled"
            innerHTML={svgHTMLString}
        />
    );
};