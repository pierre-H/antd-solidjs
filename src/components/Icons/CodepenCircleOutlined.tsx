import { CodepenCircleOutlined as BaseCodepenCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodepenCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodepenCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-codepen-circle-outlined text-xl"
            role="img"
            aria-label="codepen-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};