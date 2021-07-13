import { DeleteTwoTone as BaseDeleteTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DeleteTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDeleteTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-delete-two-tone text-xl"
            role="img"
            aria-label="delete-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};