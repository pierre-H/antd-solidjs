import { DeleteColumnOutlined as BaseDeleteColumnOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DeleteColumnOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDeleteColumnOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-delete-column-outlined text-xl"
            role="img"
            aria-label="delete-column-outlined"
            innerHTML={svgHTMLString}
        />
    );
};