import { FormOutlined as BaseFormOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FormOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFormOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-form-outlined text-xl"
            role="img"
            aria-label="form-outlined"
            innerHTML={svgHTMLString}
        />
    );
};