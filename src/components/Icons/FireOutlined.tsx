import { FireOutlined as BaseFireOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FireOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFireOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fire-outlined text-xl"
            role="img"
            aria-label="fire-outlined"
            innerHTML={svgHTMLString}
        />
    );
};