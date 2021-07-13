import { YahooOutlined as BaseYahooOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const YahooOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseYahooOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-yahoo-outlined text-xl"
            role="img"
            aria-label="yahoo-outlined"
            innerHTML={svgHTMLString}
        />
    );
};