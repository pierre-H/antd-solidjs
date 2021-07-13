import { YuqueFilled as BaseYuqueFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const YuqueFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseYuqueFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-yuque-filled text-xl"
            role="img"
            aria-label="yuque-filled"
            innerHTML={svgHTMLString}
        />
    );
};