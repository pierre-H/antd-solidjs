import { SendOutlined as BaseSendOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SendOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSendOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-send-outlined text-xl"
            role="img"
            aria-label="send-outlined"
            innerHTML={svgHTMLString}
        />
    );
};