import { GooglePlusCircleFilled as BaseGooglePlusCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GooglePlusCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGooglePlusCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-google-plus-circle-filled text-xl"
            role="img"
            aria-label="google-plus-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};