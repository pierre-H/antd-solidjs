import { KeyOutlined as BaseKeyOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const KeyOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseKeyOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-key-outlined text-xl"
            role="img"
            aria-label="key-outlined"
            innerHTML={svgHTMLString}
        />
    );
};