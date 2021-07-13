import { CloudSyncOutlined as BaseCloudSyncOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloudSyncOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudSyncOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-cloud-sync-outlined text-xl"
            role="img"
            aria-label="cloud-sync-outlined"
            innerHTML={svgHTMLString}
        />
    );
};