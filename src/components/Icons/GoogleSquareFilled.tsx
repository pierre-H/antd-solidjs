import { GoogleSquareFilled as BaseGoogleSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GoogleSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGoogleSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-google-square-filled text-xl"
            role="img"
            aria-label="google-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};