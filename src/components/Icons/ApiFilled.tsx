import { ApiFilled as BaseApiFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ApiFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseApiFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-api-filled text-xl"
            role="img"
            aria-label="api-filled"
            innerHTML={svgHTMLString}
        />
    );
};