import { WechatFilled as BaseWechatFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WechatFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWechatFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-wechat-filled text-xl"
            role="img"
            aria-label="wechat-filled"
            innerHTML={svgHTMLString}
        />
    );
};