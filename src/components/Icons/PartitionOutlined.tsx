import { PartitionOutlined as BasePartitionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PartitionOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePartitionOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-partition-outlined text-xl"
            role="img"
            aria-label="partition-outlined"
            innerHTML={svgHTMLString}
        />
    );
};