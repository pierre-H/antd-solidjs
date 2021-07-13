import { NodeIndexOutlined as BaseNodeIndexOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const NodeIndexOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseNodeIndexOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-node-index-outlined text-xl"
            role="img"
            aria-label="node-index-outlined"
            innerHTML={svgHTMLString}
        />
    );
};