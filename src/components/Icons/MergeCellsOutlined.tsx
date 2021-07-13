import { MergeCellsOutlined as BaseMergeCellsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MergeCellsOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMergeCellsOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-merge-cells-outlined text-xl"
            role="img"
            aria-label="merge-cells-outlined"
            innerHTML={svgHTMLString}
        />
    );
};