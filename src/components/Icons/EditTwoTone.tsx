import { EditTwoTone as BaseEditTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EditTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEditTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-edit-two-tone text-xl"
            role="img"
            aria-label="edit-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};