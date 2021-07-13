import { FileOutlined as BaseFileOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-outlined text-xl"
            role="img"
            aria-label="file-outlined"
            innerHTML={svgHTMLString}
        />
    );
};