import { FileSyncOutlined as BaseFileSyncOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileSyncOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileSyncOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-sync-outlined text-xl"
            role="img"
            aria-label="file-sync-outlined"
            innerHTML={svgHTMLString}
        />
    );
};