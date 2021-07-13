import { DeleteFilled as BaseDeleteFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DeleteFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDeleteFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-delete-filled text-xl"
            role="img"
            aria-label="delete-filled"
            innerHTML={svgHTMLString}
        />
    );
};