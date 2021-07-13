import { LoadingOutlined as BaseLoadingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LoadingOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLoadingOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-loading-outlined text-xl"
            role="img"
            aria-label="loading-outlined"
            innerHTML={svgHTMLString}
        />
    );
};