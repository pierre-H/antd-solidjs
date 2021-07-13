import { BuildFilled as BaseBuildFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BuildFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBuildFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-build-filled text-xl"
            role="img"
            aria-label="build-filled"
            innerHTML={svgHTMLString}
        />
    );
};