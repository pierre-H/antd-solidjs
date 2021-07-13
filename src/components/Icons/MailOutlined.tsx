import { MailOutlined as BaseMailOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MailOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMailOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-mail-outlined text-xl"
            role="img"
            aria-label="mail-outlined"
            innerHTML={svgHTMLString}
        />
    );
};