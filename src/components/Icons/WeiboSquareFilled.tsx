import { WeiboSquareFilled as BaseWeiboSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WeiboSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWeiboSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-weibo-square-filled text-xl"
            role="img"
            aria-label="weibo-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};