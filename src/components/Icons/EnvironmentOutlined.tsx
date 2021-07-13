import { EnvironmentOutlined as BaseEnvironmentOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EnvironmentOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEnvironmentOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-environment-outlined text-xl"
            role="img"
            aria-label="environment-outlined"
            innerHTML={svgHTMLString}
        />
    );
};