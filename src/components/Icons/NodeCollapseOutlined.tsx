import { NodeCollapseOutlined as BaseNodeCollapseOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const NodeCollapseOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseNodeCollapseOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-node-collapse-outlined text-xl"
            role="img"
            aria-label="node-collapse-outlined"
            innerHTML={svgHTMLString}
        />
    );
};