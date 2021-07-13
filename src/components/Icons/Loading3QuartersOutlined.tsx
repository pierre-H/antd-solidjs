import { Loading3QuartersOutlined as BaseLoading3QuartersOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const Loading3QuartersOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLoading3QuartersOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-loading3-quarters-outlined text-xl"
            role="img"
            aria-label="loading3-quarters-outlined"
            innerHTML={svgHTMLString}
        />
    );
};