import { SelectOutlined as BaseSelectOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SelectOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSelectOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-select-outlined text-xl"
            role="img"
            aria-label="select-outlined"
            innerHTML={svgHTMLString}
        />
    );
};