import { ContainerFilled as BaseContainerFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ContainerFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseContainerFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-container-filled text-xl"
            role="img"
            aria-label="container-filled"
            innerHTML={svgHTMLString}
        />
    );
};