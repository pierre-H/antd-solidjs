import { WeiboOutlined as BaseWeiboOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WeiboOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWeiboOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-weibo-outlined text-xl"
            role="img"
            aria-label="weibo-outlined"
            innerHTML={svgHTMLString}
        />
    );
};