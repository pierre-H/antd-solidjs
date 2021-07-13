import { GoogleCircleFilled as BaseGoogleCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GoogleCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGoogleCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-google-circle-filled text-xl"
            role="img"
            aria-label="google-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};