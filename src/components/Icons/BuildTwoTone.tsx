import { BuildTwoTone as BaseBuildTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BuildTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBuildTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-build-two-tone text-xl"
            role="img"
            aria-label="build-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};