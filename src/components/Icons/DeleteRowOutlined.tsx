import { DeleteRowOutlined as BaseDeleteRowOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DeleteRowOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDeleteRowOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-delete-row-outlined text-xl"
            role="img"
            aria-label="delete-row-outlined"
            innerHTML={svgHTMLString}
        />
    );
};