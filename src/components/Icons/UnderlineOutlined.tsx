import { UnderlineOutlined as BaseUnderlineOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UnderlineOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUnderlineOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-underline-outlined text-xl"
            role="img"
            aria-label="underline-outlined"
            innerHTML={svgHTMLString}
        />
    );
};