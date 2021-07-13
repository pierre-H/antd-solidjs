import { TaobaoCircleFilled as BaseTaobaoCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TaobaoCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTaobaoCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-taobao-circle-filled text-xl"
            role="img"
            aria-label="taobao-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};