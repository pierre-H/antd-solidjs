import { TaobaoSquareFilled as BaseTaobaoSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TaobaoSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTaobaoSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-taobao-square-filled text-xl"
            role="img"
            aria-label="taobao-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};