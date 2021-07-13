import { CodepenOutlined as BaseCodepenOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodepenOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodepenOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-codepen-outlined text-xl"
            role="img"
            aria-label="codepen-outlined"
            innerHTML={svgHTMLString}
        />
    );
};