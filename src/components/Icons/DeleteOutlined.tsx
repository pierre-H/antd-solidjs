import { DeleteOutlined as BaseDeleteOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DeleteOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDeleteOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-delete-outlined text-xl"
            role="img"
            aria-label="delete-outlined"
            innerHTML={svgHTMLString}
        />
    );
};