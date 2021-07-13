import { AlipayCircleOutlined as BaseAlipayCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlipayCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlipayCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-alipay-circle-outlined text-xl"
            role="img"
            aria-label="alipay-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};