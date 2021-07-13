import { WeiboCircleOutlined as BaseWeiboCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WeiboCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWeiboCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-weibo-circle-outlined text-xl"
            role="img"
            aria-label="weibo-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};