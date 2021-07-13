import { WeiboSquareOutlined as BaseWeiboSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WeiboSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWeiboSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-weibo-square-outlined text-xl"
            role="img"
            aria-label="weibo-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};