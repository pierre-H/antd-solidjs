import { GooglePlusSquareFilled as BaseGooglePlusSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GooglePlusSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGooglePlusSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-google-plus-square-filled text-xl"
            role="img"
            aria-label="google-plus-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};