import { FileProtectOutlined as BaseFileProtectOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileProtectOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileProtectOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-protect-outlined text-xl"
            role="img"
            aria-label="file-protect-outlined"
            innerHTML={svgHTMLString}
        />
    );
};