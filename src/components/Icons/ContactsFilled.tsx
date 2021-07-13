import { ContactsFilled as BaseContactsFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ContactsFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseContactsFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-contacts-filled text-xl"
            role="img"
            aria-label="contacts-filled"
            innerHTML={svgHTMLString}
        />
    );
};