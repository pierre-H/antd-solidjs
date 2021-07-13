import { AlipayOutlined as BaseAlipayOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlipayOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlipayOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-alipay-outlined text-xl"
            role="img"
            aria-label="alipay-outlined"
            innerHTML={svgHTMLString}
        />
    );
};