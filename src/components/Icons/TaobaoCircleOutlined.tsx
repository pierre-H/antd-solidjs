import { TaobaoCircleOutlined as BaseTaobaoCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TaobaoCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTaobaoCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-taobao-circle-outlined text-xl"
            role="img"
            aria-label="taobao-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};