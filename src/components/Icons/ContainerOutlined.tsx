import { ContainerOutlined as BaseContainerOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ContainerOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseContainerOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-container-outlined text-xl"
            role="img"
            aria-label="container-outlined"
            innerHTML={svgHTMLString}
        />
    );
};