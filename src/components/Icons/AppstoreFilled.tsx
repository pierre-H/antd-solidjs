import { AppstoreFilled as BaseAppstoreFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AppstoreFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAppstoreFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-appstore-filled text-xl"
            role="img"
            aria-label="appstore-filled"
            innerHTML={svgHTMLString}
        />
    );
};