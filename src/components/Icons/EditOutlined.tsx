import { EditOutlined as BaseEditOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EditOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEditOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-edit-outlined text-xl"
            role="img"
            aria-label="edit-outlined"
            innerHTML={svgHTMLString}
        />
    );
};