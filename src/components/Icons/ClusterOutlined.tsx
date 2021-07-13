import { ClusterOutlined as BaseClusterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ClusterOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseClusterOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-cluster-outlined text-xl"
            role="img"
            aria-label="cluster-outlined"
            innerHTML={svgHTMLString}
        />
    );
};