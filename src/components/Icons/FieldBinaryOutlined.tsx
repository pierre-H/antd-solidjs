import { FieldBinaryOutlined as BaseFieldBinaryOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FieldBinaryOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFieldBinaryOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-field-binary-outlined text-xl"
            role="img"
            aria-label="field-binary-outlined"
            innerHTML={svgHTMLString}
        />
    );
};