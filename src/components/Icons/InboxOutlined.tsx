import { InboxOutlined as BaseInboxOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InboxOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInboxOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-inbox-outlined text-xl"
            role="img"
            aria-label="inbox-outlined"
            innerHTML={svgHTMLString}
        />
    );
};