import { QqSquareFilled as BaseQqSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const QqSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseQqSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-qq-square-filled text-xl"
            role="img"
            aria-label="qq-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};