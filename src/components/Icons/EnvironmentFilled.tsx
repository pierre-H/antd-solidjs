import { EnvironmentFilled as BaseEnvironmentFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EnvironmentFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEnvironmentFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-environment-filled text-xl"
            role="img"
            aria-label="environment-filled"
            innerHTML={svgHTMLString}
        />
    );
};