import { FileAddOutlined as BaseFileAddOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileAddOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileAddOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-add-outlined text-xl"
            role="img"
            aria-label="file-add-outlined"
            innerHTML={svgHTMLString}
        />
    );
};