import { TaobaoOutlined as BaseTaobaoOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TaobaoOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTaobaoOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-taobao-outlined text-xl"
            role="img"
            aria-label="taobao-outlined"
            innerHTML={svgHTMLString}
        />
    );
};