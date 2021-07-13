import { ContactsOutlined as BaseContactsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ContactsOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseContactsOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-contacts-outlined text-xl"
            role="img"
            aria-label="contacts-outlined"
            innerHTML={svgHTMLString}
        />
    );
};