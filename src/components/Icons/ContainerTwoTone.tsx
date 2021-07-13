import { ContainerTwoTone as BaseContainerTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ContainerTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseContainerTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-container-two-tone text-xl"
            role="img"
            aria-label="container-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};