import { MessageOutlined as BaseMessageOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MessageOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMessageOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-message-outlined text-xl"
            role="img"
            aria-label="message-outlined"
            innerHTML={svgHTMLString}
        />
    );
};