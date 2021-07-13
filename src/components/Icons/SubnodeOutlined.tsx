import { SubnodeOutlined as BaseSubnodeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SubnodeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSubnodeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-subnode-outlined text-xl"
            role="img"
            aria-label="subnode-outlined"
            innerHTML={svgHTMLString}
        />
    );
};