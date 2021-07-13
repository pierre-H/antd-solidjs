import { BuildOutlined as BaseBuildOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BuildOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBuildOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-build-outlined text-xl"
            role="img"
            aria-label="build-outlined"
            innerHTML={svgHTMLString}
        />
    );
};