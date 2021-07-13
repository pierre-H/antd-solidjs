import { FileDoneOutlined as BaseFileDoneOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileDoneOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileDoneOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-done-outlined text-xl"
            role="img"
            aria-label="file-done-outlined"
            innerHTML={svgHTMLString}
        />
    );
};