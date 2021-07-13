import { WeiboCircleFilled as BaseWeiboCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WeiboCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWeiboCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-weibo-circle-filled text-xl"
            role="img"
            aria-label="weibo-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};