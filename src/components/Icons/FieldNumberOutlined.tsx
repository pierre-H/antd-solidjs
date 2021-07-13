import { FieldNumberOutlined as BaseFieldNumberOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FieldNumberOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFieldNumberOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-field-number-outlined text-xl"
            role="img"
            aria-label="field-number-outlined"
            innerHTML={svgHTMLString}
        />
    );
};