import { SaveOutlined as BaseSaveOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SaveOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSaveOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-save-outlined text-xl"
            role="img"
            aria-label="save-outlined"
            innerHTML={svgHTMLString}
        />
    );
};