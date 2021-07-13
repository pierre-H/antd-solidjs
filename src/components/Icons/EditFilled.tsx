import { EditFilled as BaseEditFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EditFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEditFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-edit-filled text-xl"
            role="img"
            aria-label="edit-filled"
            innerHTML={svgHTMLString}
        />
    );
};