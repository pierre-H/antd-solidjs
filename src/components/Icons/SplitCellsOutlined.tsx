import { SplitCellsOutlined as BaseSplitCellsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SplitCellsOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSplitCellsOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-split-cells-outlined text-xl"
            role="img"
            aria-label="split-cells-outlined"
            innerHTML={svgHTMLString}
        />
    );
};