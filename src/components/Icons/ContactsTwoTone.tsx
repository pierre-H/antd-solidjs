import { ContactsTwoTone as BaseContactsTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ContactsTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseContactsTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-contacts-two-tone text-xl"
            role="img"
            aria-label="contacts-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};