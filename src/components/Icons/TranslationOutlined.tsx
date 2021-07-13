import { TranslationOutlined as BaseTranslationOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TranslationOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTranslationOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-translation-outlined text-xl"
            role="img"
            aria-label="translation-outlined"
            innerHTML={svgHTMLString}
        />
    );
};