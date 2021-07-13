import { ScissorOutlined as BaseScissorOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ScissorOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseScissorOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-scissor-outlined text-xl"
            role="img"
            aria-label="scissor-outlined"
            innerHTML={svgHTMLString}
        />
    );
};