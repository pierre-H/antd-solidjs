import { MailTwoTone as BaseMailTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MailTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMailTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-mail-two-tone text-xl"
            role="img"
            aria-label="mail-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};