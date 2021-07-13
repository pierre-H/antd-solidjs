import { FieldStringOutlined as BaseFieldStringOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FieldStringOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFieldStringOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-field-string-outlined text-xl"
            role="img"
            aria-label="field-string-outlined"
            innerHTML={svgHTMLString}
        />
    );
};