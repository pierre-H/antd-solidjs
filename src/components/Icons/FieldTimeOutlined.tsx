import { FieldTimeOutlined as BaseFieldTimeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FieldTimeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFieldTimeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-field-time-outlined text-xl"
            role="img"
            aria-label="field-time-outlined"
            innerHTML={svgHTMLString}
        />
    );
};