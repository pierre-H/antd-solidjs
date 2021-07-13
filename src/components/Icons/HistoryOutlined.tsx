import { HistoryOutlined as BaseHistoryOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HistoryOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHistoryOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-history-outlined text-xl"
            role="img"
            aria-label="history-outlined"
            innerHTML={svgHTMLString}
        />
    );
};