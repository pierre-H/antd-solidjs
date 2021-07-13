import { MailFilled as BaseMailFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MailFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMailFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-mail-filled text-xl"
            role="img"
            aria-label="mail-filled"
            innerHTML={svgHTMLString}
        />
    );
};