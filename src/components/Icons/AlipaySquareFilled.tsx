import { AlipaySquareFilled as BaseAlipaySquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlipaySquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlipaySquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-alipay-square-filled text-xl"
            role="img"
            aria-label="alipay-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};