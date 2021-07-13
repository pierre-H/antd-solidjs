import { WechatOutlined as BaseWechatOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WechatOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWechatOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-wechat-outlined text-xl"
            role="img"
            aria-label="wechat-outlined"
            innerHTML={svgHTMLString}
        />
    );
};