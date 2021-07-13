import { BorderlessTableOutlined as BaseBorderlessTableOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderlessTableOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderlessTableOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-borderless-table-outlined text-xl"
            role="img"
            aria-label="borderless-table-outlined"
            innerHTML={svgHTMLString}
        />
    );
};