import { EnvironmentTwoTone as BaseEnvironmentTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EnvironmentTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEnvironmentTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-environment-two-tone text-xl"
            role="img"
            aria-label="environment-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};