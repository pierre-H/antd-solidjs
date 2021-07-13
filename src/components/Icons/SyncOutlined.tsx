import { SyncOutlined as BaseSyncOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SyncOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSyncOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sync-outlined text-xl"
            role="img"
            aria-label="sync-outlined"
            innerHTML={svgHTMLString}
        />
    );
};